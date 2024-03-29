import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { grupoSujeitoDataSource } from './grupo-sujeito.data-source.js'

describe('groupDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = grupoSujeitoDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('groupSubject').response([])
    const rsp = await tb.count({
      where: [[`grupoId`, 10]],
      select: ['grupoId', 'sujeitoId'],
      count: ['* as ttl'],
    })
    expect(db.log()).toEqual([
      'select [idGroup], [idSubject], count(*) as [ttl] from [groupSubject] where [idGroup] = 10',
    ])
    expect(rsp).toEqual([])
  })

  it('create with select', async () => {
    tracker.on.insert('groupSubject').response([{ idGroup: 10 }])
    const rsp = await tb.create({
      data: { grupoId: 10, sujeitoId: 'test' },
      returning: ['grupoId'],
    })
    expect(db.log()).toEqual([
      "insert into [groupSubject] ([idGroup], [idSubject]) output inserted.[idGroup] values (10, 'test')",
    ])
    expect(rsp).toEqual([{ grupoId: 10 }])
  })

  it('create without select', async () => {
    tracker.on.insert('groupSubject').response([])
    const rsp = await tb.create({
      data: { grupoId: 1 },
    })
    expect(db.log()).toEqual([
      'insert into [groupSubject] ([idGroup]) values (1)',
    ])
    expect(rsp).toEqual([])
  })

  it('del', async () => {
    tracker.on.delete('groupSubject').response(1)
    const rsp = await tb.del({
      where: [
        ['grupoId', 10],
        ['sujeitoId', 10],
      ],
    })
    expect(db.log()).toEqual([
      'delete from [groupSubject] where [idGroup] = 10 and [idSubject] = 10;select @@rowcount',
    ])
    expect(rsp).toEqual(1)
  })

  it('increment', async () => {
    tracker.on.update('groupSubject').response([])
    const rsp = await tb.increment({
      where: [[`grupoId`, 10]],
      increment: [`grupoId`, 2],
      returning: ['grupoId'],
    })
    expect(db.log()).toEqual([
      'update [groupSubject] set [idGroup] = [idGroup] + 2 output inserted.[idGroup] where [idGroup] = 10',
    ])
    expect(rsp).toEqual([])
  })

  it('list', async () => {
    tracker.on.select('from [groupSubject]').response([{ idGroup: 1 }])
    const rsp = await tb.list({
      where: [
        ['grupoId', 1],
        ['sujeitoId', '>', 'a'],
      ],
      orderBy: [
        ['grupoId', 'asc'],
        ['sujeitoId', 'desc'],
      ],
      limit: 50,
      select: ['grupoId', 'sujeitoId'],
    })

    expect(db.log()).toEqual([
      "select top (50) [idGroup], [idSubject] from [groupSubject] where [idGroup] = 1 and [idSubject] > 'a' order by [idGroup] asc, [idSubject] desc",
    ])
    expect(rsp).toEqual([{ grupoId: 1 }])
  })

  it('read', async () => {
    tracker.on.select('groupSubject').response({ idGroup: '1' })
    const rsp = await tb.read({
      where: [
        ['grupoId', 10],
        ['sujeitoId', 10],
      ],
      select: ['grupoId', 'sujeitoId'],
    })
    expect(db.log()).toEqual([
      'select top (1) [idGroup], [idSubject] from [groupSubject] where [idGroup] = 10 and [idSubject] = 10',
    ])
    expect(rsp).toEqual({ grupoId: '1' })
  })

  it('update', async () => {
    tracker.on.update('groupSubject').response([{ idGroup: 10 }])
    const rsp = await tb.update({
      where: [
        ['grupoId', 10],
        ['sujeitoId', 10],
      ],
      data: { grupoId: 11 },
      returning: ['grupoId'],
    })
    expect(db.log()).toEqual([
      'update [groupSubject] set [idGroup] = 11 output inserted.[idGroup] where [idGroup] = 10 and [idSubject] = 10',
    ])
    expect(rsp).toEqual([{ grupoId: 10 }])
  })
})
