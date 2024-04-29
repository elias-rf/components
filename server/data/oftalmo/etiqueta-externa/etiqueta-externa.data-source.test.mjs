import { beforeEach, describe, expect, it } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { etiquetaExternaDataSource } from './etiqueta-externa.data-source.mjs'

describe('etiquetaExternaDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = etiquetaExternaDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tEtiqueta').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'quantidade'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [controle], [qtdImpressao], count(*) as [ttl] from [tEtiqueta] where [controle] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('tEtiqueta').response([{ controle: 10 }])
    const rsp = await tb.create({
      data: { id: 10, quantidade: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [tEtiqueta] ([controle], [qtdImpressao]) output inserted.[controle] values (10, 'test')",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('tEtiqueta').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tEtiqueta] ([controle]) values (1)',
    ])
  })

  it('del', async () => {
    tracker.on.delete('tEtiqueta').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tEtiqueta] where [controle] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('tEtiqueta').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tEtiqueta] set [controle] = [controle] + 2 output inserted.[controle] where [controle] = 10',
    ])
  })

  it('list', async () => {
    tracker.on.select('from [tEtiqueta]').response([{ controle: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['quantidade', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['quantidade', 'desc'],
      ],
      limit: 50,
      select: ['id', 'quantidade'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [controle], [qtdImpressao] from [tEtiqueta] where [controle] = 1 and [qtdImpressao] > 'a' order by [controle] asc, [qtdImpressao] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tEtiqueta').response({ controle: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'quantidade'],
    })
    expect(db.log()).toEqual([
      'select top (1) [controle], [qtdImpressao] from [tEtiqueta] where [controle] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })

  it('update', async () => {
    tracker.on.update('tEtiqueta').response([{ controle: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      'update [tEtiqueta] set [controle] = 11 output inserted.[controle] where [controle] = 10',
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })
})
