import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { operacaoProducaoDataSource } from './operacao-producao.data-source.js'

describe('agendaTelefoneDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = operacaoProducaoDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tOperacaoDeProducao').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'operacao'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [kOperacao], [Operacao], count(*) as [ttl] from [tOperacaoDeProducao] where [kOperacao] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('tOperacaoDeProducao').response([{ kOperacao: 10 }])
    const rsp = await tb.create({
      data: { id: 10, operacao: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [tOperacaoDeProducao] ([Operacao], [kOperacao]) output inserted.[kOperacao] values ('test', 10)",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('tOperacaoDeProducao').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tOperacaoDeProducao] ([kOperacao]) values (1)',
    ])
  })

  it('del', async () => {
    tracker.on.delete('tOperacaoDeProducao').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tOperacaoDeProducao] where [kOperacao] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('tOperacaoDeProducao').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tOperacaoDeProducao] set [kOperacao] = [kOperacao] + 2 output inserted.[kOperacao] where [kOperacao] = 10',
    ])
  })

  it('list', async () => {
    tracker.on.select('from [tOperacaoDeProducao]').response([{ kOperacao: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['operacao', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['operacao', 'desc'],
      ],
      limit: 50,
      select: ['id', 'operacao'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [kOperacao], [Operacao] from [tOperacaoDeProducao] where [kOperacao] = 1 and [Operacao] > 'a' order by [kOperacao] asc, [Operacao] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tOperacaoDeProducao').response({ kOperacao: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'operacao'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [kOperacao], [Operacao] from [tOperacaoDeProducao] where [kOperacao] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('tOperacaoDeProducao').response([{ kOperacao: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tOperacaoDeProducao] set [kOperacao] = 11 output inserted.[kOperacao] where [kOperacao] = 10',
    ])
  })
})
