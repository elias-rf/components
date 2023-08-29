import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { OrmTable } from './orm-table'
import { knexMockMsql } from '@/mocks/connections.mock'
import { OrmDatabase } from './orm-database'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'
describe('OrmTable', () => {
  const tracker = getTracker()
  const db = new OrmDatabase(knexMockMsql)
  const tb = new OrmTable(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.resetLog()
  })

  it('deve validar select', () => {
    expect(tb.assertSelect()).toEqual(undefined)
    expect(tb.assertSelect(['name'])).toEqual(undefined)
    expect(tb.assertSelect(['id', 'name'])).toEqual(undefined)
  })

  it('deve invalidar select', () => {
    expect(() => tb.assertSelect(['names'])).toThrow(
      'não é um campo válido em phonebook use: department,email,id,name'
    )
  })

  it('deve validar sort', () => {
    expect(tb.validSort([['name', 'asc']])).toEqual(undefined)
  })

  it('deve invalidar sort', () => {
    expect(() => tb.validSort([['names', 'asc']])).toThrow(
      '[names] não é válido para order em phonebook use: department,email,id,name'
    )
  })

  it('deve validar idColumn', () => {
    expect(tb.validId([['id', 1]])).toEqual({ query: [['id', 1]] })
  })
  it('deve invalidar idColumn', () => {
    expect(() => tb.validId([['name', 1]])).toThrow(
      '[name] não é id válido em phonebook use: id'
    )
    // @ts-nocheck
    expect(() => tb.validId([['id']])).toThrow(
      'id deve ser Array<[string, any]>'
    )
    // @ts-nocheck
    expect(() => tb.validId([[1, 'id']])).toThrow(
      'id deve ser Array<[string, any]>'
    )
  })
  it('deve invalidar idColumn', () => {
    expect(() =>
      tb.validId([
        ['id', 1],
        ['name', 1],
      ])
    ).toThrow('[name] não é id válido')
  })

  it('deve validar filter', () => {
    expect(tb.validFilter([['name', 'a']])).toEqual({ where: [['name', 'a']] })
  })

  it('deve invalidar select', () => {
    expect(() => tb.validFilter([['names', 'a']])).toThrow(
      '[names] não é um campo válido para where em phonebook use: department,email,id,name'
    )
  })

  it('deve validar data', () => {
    expect(tb.assertData({ name: 'a' })).toEqual(undefined)
  })

  it('deve invalidar data', () => {
    expect(() => tb.assertData({ names: 'a' })).toThrow(
      '[names] não é um campo válido em phonebook use: id,name,department,email'
    )
  })

  test('list', async () => {
    tracker.on.select('from [phonebook]').response([{ id: 1 }])
    const rsp = await tb.list({
      filter: [
        ['id', 1],
        ['name', '>', 'a'],
      ],
      sort: [
        ['id', 'asc'],
        ['name', 'desc'],
      ],
      limit: 50,
      select: ['id', 'name'],
    })

    expect(db.sql()).toEqual([
      "select top (50) [id], [name] from [phonebook] where [id] = 1 and [name] > 'a' order by [id] asc, [name] desc",
    ])
    expect(rsp).toEqual([{ id: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1, 'a'],
        sql: 'select top (@p0) [id], [name] from [phonebook] where [id] = @p1 and [name] > @p2 order by [id] asc, [name] desc',
      },
    ])
  })

  it('del', async () => {
    tracker.on.delete('phonebook').response(1)
    const rsp = await tb.del({
      id: [['id', 10]],
      returning: ['id'],
    })
    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'delete from [phonebook] output deleted.[id] where [id] = @p0',
      },
    ])
  })

  it('read', async () => {
    tracker.on.select('phonebook').response([{ id: '1' }])
    const rsp = await tb.read({
      id: [['id', 10]],
      select: ['id', 'name'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 10],
        sql: 'select top (@p0) [id], [name] from [phonebook] where [id] = @p1',
      },
    ])
  })

  it('update', async () => {
    tracker.on.update('phonebook').response([{ id: 10 }])
    const rsp = await tb.update({
      id: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [11, 10],
        sql: 'update [phonebook] set [id] = @p0 output inserted.[id] where [id] = @p1',
      },
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('phonebook').response({ id: 10 })
    const rsp = await tb.create({
      data: { id: 10 },
      returning: ['id'],
    })
    expect(rsp).toEqual({ id: 10 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'insert into [phonebook] ([id]) output inserted.[id] values (@p0)',
      },
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('phonebook').response(1)
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'insert into [phonebook] ([id]) values (@p0)',
      },
    ])
  })

  it('increment', async () => {
    tracker.on.update('phonebook').response([])
    const rsp = await tb.increment({
      filter: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, 10],
        sql: 'update [phonebook] set [id] = [id] + @p0 output inserted.[id] where [id] = @p1',
      },
    ])
  })

  it('count', async () => {
    tracker.on.select('phonebook').response([])
    const rsp = await tb.count({
      filter: [[`id`, 10]],
      select: ['id', 'name'],
      count: '* as ttl',
    })
    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'select [id], [name], count(*) as [ttl] from [phonebook] where [id] = @p0',
      },
    ])
  })
})
