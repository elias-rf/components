import { beforeEach, describe, expect, it } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { agendaTelefoneDataSource } from './agenda-telefone.data-source.mjs'

describe('agendaTelefoneDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = agendaTelefoneDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('phonebook').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'nome'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [id], [name], count(*) as [ttl] from [phonebook] where [id] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('phonebook').response([{ id: 10 }])
    const rsp = await tb.create({
      data: { id: 10, nome: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [phonebook] ([id], [name]) output inserted.[id] values (10, 'test')",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('phonebook').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [phonebook] ([id]) values (1)'])
  })

  it('del', async () => {
    tracker.on.delete('phonebook').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [phonebook] where [id] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('phonebook').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [phonebook] set [id] = [id] + 2 output inserted.[id] where [id] = 10',
    ])
  })

  it('list', async () => {
    tracker.on.select('from [phonebook]').response([{ id: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['nome', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['nome', 'desc'],
      ],
      limit: 50,
      select: ['id', 'nome'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [id], [name] from [phonebook] where [id] = 1 and [name] > 'a' order by [id] asc, [name] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('phonebook').response({ id: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [id], [name] from [phonebook] where [id] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('phonebook').response([{ id: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [phonebook] set [id] = 11 output inserted.[id] where [id] = 10',
    ])
  })
})
