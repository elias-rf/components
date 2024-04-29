import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { estoqueDataSource } from './estoque.data-source.mjs'

describe('estoqueDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = estoqueDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('Estoque').response([])
    const rsp = await tb.count({
      where: [[`empresaId`, 10]],
      select: ['empresaId', 'produtoId'],
      count: ['* as ttl'],
    })
    expect(db.log()).toEqual([
      'select [CdEmpresa], [CdProduto], count(*) as [ttl] from [Estoque] where [CdEmpresa] = 10',
    ])
    expect(rsp).toEqual([])
  })

  test('create with select', async () => {
    tracker.on.insert('Estoque').response([{ CdEmpresa: 10 }])
    const rsp = await tb.create({
      data: { empresaId: 10, produtoId: 'test' },
      returning: ['empresaId'],
    })
    expect(db.log()).toEqual([
      "insert into [Estoque] ([CdEmpresa], [CdProduto]) output inserted.[CdEmpresa] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ empresaId: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('Estoque').response([])
    const rsp = await tb.create({
      data: { empresaId: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [Estoque] ([CdEmpresa]) values (1)'])
  })

  test('del', async () => {
    tracker.on.delete('Estoque').response(1)
    const rsp = await tb.del({
      where: [
        ['empresaId', 10],
        ['produtoId', 10],
      ],
    })
    expect(db.log()).toEqual([
      'delete from [Estoque] where [CdEmpresa] = 10 and [CdProduto] = 10;select @@rowcount',
    ])
    expect(rsp).toEqual(1)
  })

  test('increment', async () => {
    tracker.on.update('Estoque').response([])
    const rsp = await tb.increment({
      where: [[`empresaId`, 10]],
      increment: [`empresaId`, 2],
      returning: ['empresaId'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [Estoque] set [CdEmpresa] = [CdEmpresa] + 2 output inserted.[CdEmpresa] where [CdEmpresa] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [Estoque]')
      .response([{ CdEmpresa: 1, CdProduto: 'fulano' }])
    const rsp = await tb.list({
      where: [
        ['empresaId', 1],
        ['produtoId', '>', 'a'],
      ],
      orderBy: [
        ['empresaId', 'asc'],
        ['produtoId', 'desc'],
      ],
      limit: 50,
      select: ['empresaId', 'produtoId'],
    })

    expect(rsp).toEqual([{ empresaId: 1, produtoId: 'fulano' }])
    expect(db.log()).toEqual([
      "select top (50) [CdEmpresa], [CdProduto] from [Estoque] where [CdEmpresa] = 1 and [CdProduto] > 'a' order by [CdEmpresa] asc, [CdProduto] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('Estoque').response({ CdEmpresa: '1' })
    const rsp = await tb.read({
      where: [
        ['empresaId', 10],
        ['produtoId', 10],
      ],
      select: ['empresaId', 'produtoId'],
    })
    expect(db.log()).toEqual([
      'select top (1) [CdEmpresa], [CdProduto] from [Estoque] where [CdEmpresa] = 10 and [CdProduto] = 10',
    ])
    expect(rsp).toEqual({ empresaId: '1' })
  })

  test('update', async () => {
    tracker.on
      .update('Estoque')
      .response([{ CdEmpresa: 10, CdProduto: 'fulano' }])
    const rsp = await tb.update({
      where: [
        ['empresaId', 10],
        ['produtoId', 10],
      ],
      data: { empresaId: 11 },
      returning: ['empresaId'],
    })
    expect(db.log()).toEqual([
      'update [Estoque] set [CdEmpresa] = 11 output inserted.[CdEmpresa] where [CdEmpresa] = 10 and [CdProduto] = 10',
    ])
    expect(rsp).toEqual([{ empresaId: 10, produtoId: 'fulano' }])
  })
})
