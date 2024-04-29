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
    tracker.on.select('CadPro').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'produto'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [CdProduto], [Descricao], count(*) as [ttl] from [CadPro] where [CdProduto] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('CadPro').response([{ CdProduto: 10 }])
    const rsp = await tb.create({
      data: { id: 10, produto: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [CadPro] ([CdProduto], [Descricao]) output inserted.[CdProduto] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('CadPro').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual(['insert into [CadPro] ([CdProduto]) values (1)'])
  })

  test('del', async () => {
    tracker.on.delete('CadPro').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [CadPro] where [CdProduto] = 10;select @@rowcount',
    ])
  })

  test('increment', async () => {
    tracker.on.update('CadPro').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [CadPro] set [CdProduto] = [CdProduto] + 2 output inserted.[CdProduto] where [CdProduto] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [CadPro]')
      .response([{ CdProduto: 1, Descricao: 'fulano' }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['produto', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['produto', 'desc'],
      ],
      limit: 50,
      select: ['id', 'produto'],
    })

    expect(rsp).toEqual([{ id: 1, produto: 'fulano' }])
    expect(db.log()).toEqual([
      "select top (50) [CdProduto], [Descricao] from [CadPro] where [CdProduto] = 1 and [Descricao] > 'a' order by [CdProduto] asc, [Descricao] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('CadPro').response({ CdProduto: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'produto'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [CdProduto], [Descricao] from [CadPro] where [CdProduto] = 10',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadPro').response([{ CdProduto: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [CadPro] set [CdProduto] = 11 output inserted.[CdProduto] where [CdProduto] = 10',
    ])
  })
})
