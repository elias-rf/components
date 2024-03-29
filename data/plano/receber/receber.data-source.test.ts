import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { receberDataSource } from './receber.data-source.js'

describe('receberDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = receberDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('TitCobr').response([])
    const rsp = await tb.count({
      where: [[`empresaId`, 10]],
      select: ['empresaId', 'numero'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [CdFilial], [NrDoc], count(*) as [ttl] from [TitCobr] where [CdFilial] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('TitCobr').response([{ CdFilial: 10 }])
    const rsp = await tb.create({
      data: { empresaId: 10, numero: 'test' },
      returning: ['empresaId'],
    })
    expect(db.log()).toEqual([
      "insert into [TitCobr] ([CdFilial], [NrDoc]) output inserted.[CdFilial] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ empresaId: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('TitCobr').response([])
    const rsp = await tb.create({
      data: { empresaId: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [TitCobr] ([CdFilial]) values (1)'])
  })

  test('del', async () => {
    tracker.on.delete('TitCobr').response(1)
    const rsp = await tb.del({
      where: [
        ['empresaId', 10],
        ['numero', '001'],
        ['serie', '001'],
        ['modelo', 'X'],
      ],
    })
    expect(db.log()).toEqual([
      "delete from [TitCobr] where [CdFilial] = 10 and [NrDoc] = '001' and [Serie] = '001' and [Modelo] = 'X';select @@rowcount",
    ])
    expect(rsp).toEqual(1)
  })

  test('increment', async () => {
    tracker.on.update('TitCobr').response([])
    const rsp = await tb.increment({
      where: [[`empresaId`, 10]],
      increment: [`empresaId`, 2],
      returning: ['empresaId'],
    })
    expect(db.log()).toEqual([
      'update [TitCobr] set [CdFilial] = [CdFilial] + 2 output inserted.[CdFilial] where [CdFilial] = 10',
    ])
    expect(rsp).toEqual([])
  })

  test('list', async () => {
    tracker.on
      .select('from [TitCobr]')
      .response([{ CdFilial: 1, NrDoc: '001' }])
    const rsp = await tb.list({
      where: [
        ['empresaId', 1],
        ['numero', '>', 'a'],
      ],
      orderBy: [
        ['empresaId', 'asc'],
        ['numero', 'desc'],
      ],
      limit: 50,
      select: ['empresaId', 'empresaId'],
    })

    expect(rsp).toEqual([{ empresaId: 1, numero: '001' }])
    expect(db.log()).toEqual([
      "select top (50) [CdFilial], [CdFilial] from [TitCobr] where [CdFilial] = 1 and [NrDoc] > 'a' order by [CdFilial] asc, [NrDoc] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('TitCobr').response({ CdFilial: '1' })
    const rsp = await tb.read({
      where: [
        ['empresaId', 10],
        ['numero', '001'],
        ['serie', '001'],
        ['modelo', 'X'],
      ],
      select: ['empresaId', 'numero'],
    })
    expect(rsp).toEqual({ empresaId: '1' })
    expect(db.log()).toEqual([
      "select top (1) [CdFilial], [NrDoc] from [TitCobr] where [CdFilial] = 10 and [NrDoc] = '001' and [Serie] = '001' and [Modelo] = 'X'",
    ])
  })

  test('update', async () => {
    tracker.on.update('TitCobr').response([{ CdFilial: 10 }])
    const rsp = await tb.update({
      where: [
        ['empresaId', 10],
        ['numero', '001'],
        ['serie', '001'],
        ['modelo', 'X'],
      ],
      data: { empresaId: 11 },
      returning: ['empresaId'],
    })
    expect(db.log()).toEqual([
      "update [TitCobr] set [CdFilial] = 11 output inserted.[CdFilial] where [CdFilial] = 10 and [NrDoc] = '001' and [Serie] = '001' and [Modelo] = 'X'",
    ])
    expect(rsp).toEqual([{ empresaId: 10 }])
  })
})
