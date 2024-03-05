import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { clienteDataSource } from './cliente.data-source.js'

describe('clienteDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = clienteDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('CadCli').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'razaoSocial'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [CdCliente], [RzSocial], count(*) as [ttl] from [CadCli] where [CdCliente] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('CadCli').response([{ CdCliente: 10 }])
    const rsp = await tb.create({
      data: { id: 10, razaoSocial: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [CadCli] ([CdCliente], [RzSocial]) output inserted.[CdCliente] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('CadCli').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [CadCli] ([CdCliente]) values (1)'])
  })

  test('del', async () => {
    tracker.on.delete('CadCli').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [CadCli] where [CdCliente] = 10;select @@rowcount',
    ])
  })

  test('increment', async () => {
    tracker.on.update('CadCli').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [CadCli] set [id] = [id] + 2 output inserted.[CdCliente] where [CdCliente] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [CadCli]')
      .response([{ CdCliente: 1, RzSocial: 'fulano' }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['razaoSocial', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['razaoSocial', 'desc'],
      ],
      limit: 50,
      select: ['id', 'razaoSocial'],
    })

    expect(rsp).toEqual([{ id: 1, razaoSocial: 'fulano' }])
    expect(db.log()).toEqual([
      "select top (50) [CdCliente], [RzSocial] from [CadCli] where [CdCliente] = 1 and [RzSocial] > 'a' order by [CdCliente] asc, [RzSocial] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('CadCli').response({ CdCliente: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'razaoSocial'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [CdCliente], [RzSocial] from [CadCli] where [CdCliente] = 10',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadCli').response([{ CdCliente: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [CadCli] set [CdCliente] = 11 output inserted.[CdCliente] where [CdCliente] = 10',
    ])
  })
})
