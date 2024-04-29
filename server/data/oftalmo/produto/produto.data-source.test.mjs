import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { produtoDataSource } from './produto.data-source.mjs'

describe('produtoDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = produtoDataSource(db)
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
      'select [kProduto], [NomeComercial], count(*) as [ttl] from [tbl_Produto] where [kProduto] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('tbl_Produto').response([{ kProduto: 10 }])
    const rsp = await tb.create({
      data: { id: 10, nome: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [tbl_Produto] ([NomeComercial], [kProduto]) output inserted.[kProduto] values ('test', 10)",
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
      'insert into [tbl_Produto] ([kProduto]) values (1)',
    ])
  })

  test('del', async () => {
    tracker.on.delete('tbl_Produto').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tbl_Produto] where [kProduto] = 10;select @@rowcount',
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
      'update [tbl_Produto] set [kProduto] = [kProduto] + 2 output inserted.[kProduto] where [kProduto] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [tbl_Produto]')
      .response([{ kProduto: 1, NomeComercial: 'fulano' }])
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

    expect(rsp).toEqual([{ id: 1, nome: 'fulano' }])
    expect(db.log()).toEqual([
      "select top (50) [kProduto], [NomeComercial] from [tbl_Produto] where [kProduto] = 1 and [NomeComercial] > 'a' order by [kProduto] asc, [NomeComercial] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('tbl_Produto').response({ kProduto: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [kProduto], [NomeComercial] from [tbl_Produto] where [kProduto] = 10',
    ])
  })

  test('update', async () => {
    tracker.on.update('tbl_Produto').response([{ kProduto: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tbl_Produto] set [kProduto] = 11 output inserted.[kProduto] where [kProduto] = 10',
    ])
  })
})
