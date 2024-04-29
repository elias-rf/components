import { beforeEach, describe, expect, it } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { etiquetaInternaDataSource } from './etiqueta-interna.data-source.mjs'

describe('etiquetaInternaDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = etiquetaInternaDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tbl_producao_etiqueta').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'produtoItemId'],
      count: ['* as ttl'],
    })
    expect(db.log()).toEqual([
      'select [NumControle], [fkProdutoItem], count(*) as [ttl] from [tbl_producao_etiqueta] where [NumControle] = 10',
    ])
    expect(rsp).toEqual([])
  })

  it('create with select', async () => {
    tracker.on.insert('tbl_producao_etiqueta').response([{ NumControle: 10 }])
    const rsp = await tb.create({
      data: { id: 10, produtoItemId: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [tbl_producao_etiqueta] ([NumControle], [fkProdutoItem]) output inserted.[NumControle] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  it('create without select', async () => {
    tracker.on.insert('tbl_producao_etiqueta').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(db.log()).toEqual([
      'insert into [tbl_producao_etiqueta] ([NumControle]) values (1)',
    ])
    expect(rsp).toEqual([])
  })

  it('del', async () => {
    tracker.on.delete('tbl_producao_etiqueta').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(db.log()).toEqual([
      'delete from [tbl_producao_etiqueta] where [NumControle] = 10;select @@rowcount',
    ])
    expect(rsp).toEqual(1)
  })

  it('increment', async () => {
    tracker.on.update('tbl_producao_etiqueta').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tbl_producao_etiqueta] set [NumControle] = [NumControle] + 2 output inserted.[NumControle] where [NumControle] = 10',
    ])
  })

  it('list', async () => {
    tracker.on
      .select('from [tbl_producao_etiqueta]')
      .response([{ NumControle: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['produtoItemId', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['produtoItemId', 'desc'],
      ],
      limit: 50,
      select: ['id', 'produtoItemId'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [NumControle], [fkProdutoItem] from [tbl_producao_etiqueta] where [NumControle] = 1 and [fkProdutoItem] > 'a' order by [NumControle] asc, [fkProdutoItem] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tbl_producao_etiqueta').response({ NumControle: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'produtoItemId'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [NumControle], [fkProdutoItem] from [tbl_producao_etiqueta] where [NumControle] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('tbl_producao_etiqueta').response([{ NumControle: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tbl_producao_etiqueta] set [NumControle] = 11 output inserted.[NumControle] where [NumControle] = 10',
    ])
  })
})
