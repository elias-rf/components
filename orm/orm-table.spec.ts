import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { OrmDatabase } from './orm-database'
import { ormTable } from './orm-table'

describe('OrmTable', () => {
  const tracker = getTracker()
  const db = new OrmDatabase(knexMockMsql)
  const tb = ormTable(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.resetLog()
  })

  it('deve validar select', () => {
    expect(tb.util.validSelect()).toEqual({ select: ['*'] })
    expect(tb.util.validSelect(['name'])).toEqual({ select: ['name'] })
    expect(tb.util.validSelect(['id', 'name'])).toEqual({
      select: ['id', 'name'],
    })
  })

  it('deve invalidar select', () => {
    expect(() => tb.util.validSelect(['names'])).toThrow(
      '[names] não é um campo válido para select em phonebook use: department,email,id,name'
    )
  })

  it('deve validar sort', () => {
    expect(tb.util.validOrderBy([['name', 'asc']])).toEqual({
      orderBy: [['name', 'asc']],
    })
  })

  it('deve invalidar sort', () => {
    expect(() => tb.util.validOrderBy([['names', 'asc']])).toThrow(
      '[names] não é um campo válido para where em phonebook use: department,email,id,name'
    )
  })

  it('deve validar idColumn', () => {
    expect(tb.util.validId([['id', 1]])).toEqual({ where: [['id', 1]] })
  })
  it('deve invalidar idColumn', () => {
    expect(() => tb.util.validId([['name', 1]])).toThrow(
      '[name] não é id válido em phonebook use: id'
    )
    // @ts-ignore
    expect(() => tb.util.validId([['id']])).toThrow(
      'id deve ser Array<[string, any]>'
    )
    // @ts-ignore
    expect(() => tb.util.validId([[1, 'id']])).toThrow(
      'id deve ser Array<[string, any]>'
    )
  })
  it('deve invalidar idColumn', () => {
    expect(() =>
      tb.util.validId([
        ['id', 1],
        ['name', 1],
      ])
    ).toThrow('[name] não é id válido')
  })

  it('deve validar where', () => {
    expect(tb.util.validWhere([['name', 'a']])).toEqual({
      where: [['name', 'a']],
    })
  })

  it('deve validar where In', () => {
    expect(tb.util.validWhere([['name', 'a']])).toEqual({
      where: [['name', 'a']],
    })
  })

  it('deve invalidar select', () => {
    expect(() => tb.util.validWhere([['names', 'a']])).toThrow(
      '[names] não é um campo válido para where em phonebook use: department,email,id,name'
    )
  })

  it('deve validar data', () => {
    expect(tb.util.validData({ name: 'a' })).toEqual({ name: 'a' })
  })

  it('deve invalidar data', () => {
    expect(() => tb.util.validData({ names: 'a' })).toThrow(
      '[names] não é um campo válido para data em phonebook use: department,email,id,name'
    )
  })

  test('list', async () => {
    tracker.on.select('from [phonebook]').response([{ id: 1 }])
    const rsp = await tb.rpc.list({
      where: [
        ['id', 1],
        ['name', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['name', 'desc'],
      ],
      limit: 50,
      select: ['id', 'name'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.sql()).toEqual([
      "select top (50) [id], [name] from [phonebook] where [id] = 1 and [name] > 'a' order by [id] asc, [name] desc",
    ])
  })

  it('del', async () => {
    tracker.on.delete('phonebook').response(1)
    const rsp = await tb.rpc.del({
      id: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.sql()).toEqual([
      'delete from [phonebook] where [id] = 10;select @@rowcount',
    ])
  })

  it('read', async () => {
    tracker.on.select('phonebook').response({ id: '1' })
    const rsp = await tb.rpc.read({
      where: [['id', 10]],
      select: ['id', 'name'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.sql()).toEqual([
      'select top (1) [id], [name] from [phonebook] where [id] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('phonebook').response([{ id: 10 }])
    const rsp = await tb.rpc.update({
      id: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.sql()).toEqual([
      'update [phonebook] set [id] = 11 output inserted.[id] where [id] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('phonebook').response({ id: 10 })
    const rsp = await tb.rpc.create({
      data: { id: 10 },
      returning: ['id'],
    })
    expect(rsp).toEqual({ id: 10 })
    expect(db.sql()).toEqual([
      'insert into [phonebook] ([id]) output inserted.[id] values (10)',
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('phonebook').response(1)
    const rsp = await tb.rpc.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual(1)
    expect(db.sql()).toEqual(['insert into [phonebook] ([id]) values (1)'])
  })

  it('increment', async () => {
    tracker.on.update('phonebook').response([])
    const rsp = await tb.rpc.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.sql()).toEqual([
      'update [phonebook] set [id] = [id] + 2 output inserted.[id] where [id] = 10',
    ])
  })

  it('count', async () => {
    tracker.on.select('phonebook').response([])
    const rsp = await tb.rpc.count({
      where: [[`id`, 10]],
      select: ['id', 'name'],
      count: '* as ttl',
    })
    expect(rsp).toEqual([])
    expect(db.sql()).toEqual([
      'select count(*) as [ttl], [id], [name] from [phonebook] where [id] = 10',
    ])
  })
})
