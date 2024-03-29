import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { groupDataSource } from './group.data-source.js'

describe('groupDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = groupDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tbl_Seguranca_Grupo').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'nome'],
      count: ['* as ttl'],
    })
    expect(db.log()).toEqual([
      'select [kGrupo], [NomeGrupo], count(*) as [ttl] from [tbl_Seguranca_Grupo] where [kGrupo] = 10',
    ])
    expect(rsp).toEqual([])
  })

  it('create with select', async () => {
    tracker.on.insert('tbl_Seguranca_Grupo').response([{ kGrupo: 10 }])
    const rsp = await tb.create({
      data: { id: 10, nome: 'test' },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      "insert into [tbl_Seguranca_Grupo] ([NomeGrupo], [kGrupo]) output inserted.[kGrupo] values ('test', 10)",
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })

  it('create without select', async () => {
    tracker.on.insert('tbl_Seguranca_Grupo').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(db.log()).toEqual([
      'insert into [tbl_Seguranca_Grupo] ([kGrupo]) values (1)',
    ])
    expect(rsp).toEqual([])
  })

  it('del', async () => {
    tracker.on.delete('tbl_Seguranca_Grupo').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(db.log()).toEqual([
      'delete from [tbl_Seguranca_Grupo] where [kGrupo] = 10;select @@rowcount',
    ])
    expect(rsp).toEqual(1)
  })

  it('increment', async () => {
    tracker.on.update('tbl_Seguranca_Grupo').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      'update [tbl_Seguranca_Grupo] set [kGrupo] = [kGrupo] + 2 output inserted.[kGrupo] where [kGrupo] = 10',
    ])
    expect(rsp).toEqual([])
  })

  it('list', async () => {
    tracker.on.select('from [tbl_Seguranca_Grupo]').response([{ kGrupo: 1 }])
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
      "select top (50) [kGrupo], [NomeGrupo] from [tbl_Seguranca_Grupo] where [kGrupo] = 1 and [NomeGrupo] > 'a' order by [kGrupo] asc, [NomeGrupo] desc",
    ])
    expect(rsp).toEqual([{ id: 1 }])
  })

  it('read', async () => {
    tracker.on.select('tbl_Seguranca_Grupo').response({ kGrupo: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(db.log()).toEqual([
      'select top (1) [kGrupo], [NomeGrupo] from [tbl_Seguranca_Grupo] where [kGrupo] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })

  it('update', async () => {
    tracker.on.update('tbl_Seguranca_Grupo').response([{ kGrupo: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(db.log()).toEqual([
      'update [tbl_Seguranca_Grupo] set [kGrupo] = 11 output inserted.[kGrupo] where [kGrupo] = 10',
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })
})
