import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { ordemProducaoDataSource } from './ordem-producao.data-source.js'

describe('agendaTelefoneDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ordemProducaoDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tOrdemProducao').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'usuario'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [kOp], [NomeUsuario], count(*) as [ttl] from [tOrdemProducao] where [kOp] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('tOrdemProducao').response([{ kOp: 10 }])
    const rsp = await tb.create({
      data: { id: 10, usuario: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [tOrdemProducao] ([NomeUsuario], [kOp]) output inserted.[kOp] values ('test', 10)",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('tOrdemProducao').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tOrdemProducao] ([kOp]) values (1)',
    ])
  })

  it('del', async () => {
    tracker.on.delete('tOrdemProducao').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tOrdemProducao] where [kOp] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('tOrdemProducao').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tOrdemProducao] set [kOp] = [kOp] + 2 output inserted.[kOp] where [kOp] = 10',
    ])
  })

  it('list', async () => {
    tracker.on.select('from [tOrdemProducao]').response([{ kOp: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['usuario', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['usuario', 'desc'],
      ],
      limit: 50,
      select: ['id', 'usuario'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [kOp], [NomeUsuario] from [tOrdemProducao] where [kOp] = 1 and [NomeUsuario] > 'a' order by [kOp] asc, [NomeUsuario] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tOrdemProducao').response({ kOp: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'usuario'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [kOp], [NomeUsuario] from [tOrdemProducao] where [kOp] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('tOrdemProducao').response([{ kOp: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tOrdemProducao] set [kOp] = 11 output inserted.[kOp] where [kOp] = 10',
    ])
  })
})
