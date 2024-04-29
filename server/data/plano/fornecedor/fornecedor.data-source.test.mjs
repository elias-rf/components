import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { fornecedorDataSource } from './fornecedor.data-source.mjs'

describe('fornecedorDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = fornecedorDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('count', async () => {
    tracker.on.select('CadFor').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'razaoSocial'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [CdFornecedor], [RzSocial], count(*) as [ttl] from [CadFor] where [CdFornecedor] = 10',
    ])
  })

  test('create with select', async () => {
    tracker.on.insert('CadFor').response([{ CdFornecedor: 10 }])
    const rsp = await tb.create({
      data: { id: 10, razaoSocial: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [CadFor] ([CdFornecedor], [RzSocial]) output inserted.[CdFornecedor] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  test('create without select', async () => {
    tracker.on.insert('CadFor').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [CadFor] ([CdFornecedor]) values (1)',
    ])
  })

  test('del', async () => {
    tracker.on.delete('CadFor').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [CadFor] where [CdFornecedor] = 10;select @@rowcount',
    ])
  })

  test('increment', async () => {
    tracker.on.update('CadFor').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [CadFor] set [CdFornecedor] = [CdFornecedor] + 2 output inserted.[CdFornecedor] where [CdFornecedor] = 10',
    ])
  })

  test('list', async () => {
    tracker.on
      .select('from [CadFor]')
      .response([{ CdFornecedor: 1, RzSocial: 'fulano' }])
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
      "select top (50) [CdFornecedor], [RzSocial] from [CadFor] where [CdFornecedor] = 1 and [RzSocial] > 'a' order by [CdFornecedor] asc, [RzSocial] desc",
    ])
  })

  test('read', async () => {
    tracker.on.select('CadFor').response({ CdFornecedor: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'razaoSocial'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [CdFornecedor], [RzSocial] from [CadFor] where [CdFornecedor] = 10',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadFor').response([{ CdFornecedor: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [CadFor] set [CdFornecedor] = 11 output inserted.[CdFornecedor] where [CdFornecedor] = 10',
    ])
  })
})
