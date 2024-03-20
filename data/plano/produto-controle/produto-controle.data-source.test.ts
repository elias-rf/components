import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { produtoControleDataSource } from './produto-controle.data-source.js'

describe('produtoDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = produtoControleDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('Lotes').response([])
    const rsp = await tb.count({
      where: [[`produtoId`, 10]],
      select: ['produtoId', 'loteId'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [CdProduto], [CdLote], count(*) as [ttl] from [Lotes] where [CdProduto] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('Lotes').response([{ CdProduto: 10 }])
    const rsp = await tb.create({
      data: { produtoId: 10, loteId: 'test' },
      returning: ['produtoId'],
    })
    expect(db.log()).toEqual([
      "insert into [Lotes] ([CdLote], [CdProduto]) output inserted.[CdProduto] values ('test', 10)",
    ])
    expect(rsp).toEqual([{ produtoId: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('Lotes').response([])
    const rsp = await tb.create({
      data: { produtoId: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [Lotes] ([CdProduto]) values (1)'])
  })

  test('del', async () => {
    tracker.on.delete('Lotes').response(1)
    const rsp = await tb.del({
      where: [
        ['produtoId', 10],
        ['loteId', 10],
      ],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [Lotes] where [CdProduto] = 10 and [CdLote] = 10;select @@rowcount',
    ])
  })

  test('increment', async () => {
    tracker.on.update('Lotes').response([])
    const rsp = await tb.increment({
      where: [[`produtoId`, 10]],
      increment: [`produtoId`, 2],
      returning: ['produtoId'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [Lotes] set [CdProduto] = [CdProduto] + 2 output inserted.[CdProduto] where [CdProduto] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [Lotes]')
      .response([{ CdProduto: 1, CdLote: 'fulano' }])
    const rsp = await tb.list({
      where: [
        ['produtoId', 1],
        ['loteId', '>', 'a'],
      ],
      orderBy: [
        ['produtoId', 'asc'],
        ['loteId', 'desc'],
      ],
      limit: 50,
      select: ['produtoId', 'loteId'],
    })

    expect(rsp).toEqual([{ produtoId: 1, loteId: 'fulano' }])
    expect(db.log()).toEqual([
      "select top (50) [CdProduto], [CdLote] from [Lotes] where [CdProduto] = 1 and [CdLote] > 'a' order by [CdProduto] asc, [CdLote] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('Lotes').response({ CdProduto: '1' })
    const rsp = await tb.read({
      where: [
        ['produtoId', 10],
        ['loteId', 10],
      ],
      select: ['produtoId', 'loteId'],
    })
    expect(rsp).toEqual({ produtoId: '1' })
    expect(db.log()).toEqual([
      'select top (1) [CdProduto], [CdLote] from [Lotes] where [CdProduto] = 10 and [CdLote] = 10',
    ])
  })

  test('update', async () => {
    tracker.on.update('Lotes').response([{ CdProduto: 10 }])
    const rsp = await tb.update({
      where: [
        ['produtoId', 10],
        ['loteId', 10],
      ],
      data: { produtoId: 11 },
      returning: ['produtoId'],
    })
    expect(rsp).toEqual([{ produtoId: 10 }])
    expect(db.log()).toEqual([
      'update [Lotes] set [CdProduto] = 11 output inserted.[CdProduto] where [CdProduto] = 10 and [CdLote] = 10',
    ])
  })
})
