import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { produtoItemDataSource } from './produto-item.data-source.mjs'

describe('produtoDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = produtoItemDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('tbl_Produto').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'nome'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [kProdutoItem], [NomeProdutoItem], count(*) as [ttl] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('tbl_Produto').response([{ kProdutoItem: 10 }])
    const rsp = await tb.create({
      data: { id: 10, nome: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [tbl_Produto_Item] ([NomeProdutoItem], [kProdutoItem]) output inserted.[kProdutoItem] values ('test', 10)",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('tbl_Produto').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tbl_Produto_Item] ([kProdutoItem]) values (1)',
    ])
  })

  test('del', async () => {
    tracker.on.delete('tbl_Produto').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tbl_Produto_Item] where [kProdutoItem] = 10;select @@rowcount',
    ])
  })

  test('increment', async () => {
    tracker.on.update('tbl_Produto').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tbl_Produto_Item] set [kProdutoItem] = [kProdutoItem] + 2 output inserted.[kProdutoItem] where [kProdutoItem] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 1, NomeProdutoItem: 'fulano' }])
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

    expect(db.log()).toEqual([
      "select top (50) [kProdutoItem], [NomeProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = 1 and [NomeProdutoItem] > 'a' order by [kProdutoItem] asc, [NomeProdutoItem] desc",
    ])
    expect(rsp).toEqual([{ id: 1, nome: 'fulano' }])
  })

  test('read', async () => {
    tracker.on.select('tbl_Produto').response({ kProdutoItem: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(db.log()).toEqual([
      'select top (1) [kProdutoItem], [NomeProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })

  test('update', async () => {
    tracker.on.update('tbl_Produto').response([{ kProdutoItem: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      'update [tbl_Produto_Item] set [kProdutoItem] = 11 output inserted.[kProdutoItem] where [kProdutoItem] = 10',
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })
})
