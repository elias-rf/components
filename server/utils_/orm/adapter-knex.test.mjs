import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../mocks/connections.mock.mjs'
import { getTracker } from '../mocks/database.mock.mjs'
import { adapterKnex } from './adapter-knex.mjs'

describe('adapterKnex', () => {
  const orm = adapterKnex(knexMockMsql)
  orm.startLog()
  const tracker = getTracker()

  beforeEach(() => {
    tracker.reset()
    tracker.on.any('select').response([])
    tracker.on.any('user').response(1)
    orm.startLog()
  })

  describe('select', () => {
    test('from', async () => {
      await orm({ from: 'user' })
      expect(orm.log()).toEqual(['select * from [user]'])
    })

    test('select from', async () => {
      await orm({ select: ['id'], from: 'user' })
      expect(orm.log()).toEqual(['select [id] from [user]'])
    })

    test('select múltiplo', async () => {
      await orm({ select: ['id', 'name'], from: 'users' })
      expect(orm.log()).toEqual(['select [id], [name] from [users]'])
    })

    test('select as', async () => {
      await orm({ select: ['id as key'], from: 'users' })
      expect(orm.log()).toEqual(['select [id] as [key] from [users]'])
    })

    test('where', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [
          ['id', '=', 1],
          ['name', 'like', '%test%'],
        ],
      })
      expect(orm.log()).toEqual([
        "select [id] from [users] where [id] = 1 and [name] like '%test%'",
      ])
    })

    test('in', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'in', [1, 2, 3]]],
      })
      expect(orm.log()).toEqual([
        'select [id] from [users] where [id] in (1, 2, 3)',
      ])
    })

    test('not in', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'not in', [1, 2, 3]]],
      })
      expect(orm.log()).toEqual([
        'select [id] from [users] where [id] not in (1, 2, 3)',
      ])
    })

    test('between', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'between', [1, 3]]],
      })
      expect(orm.log()).toEqual([
        'select [id] from [users] where [id] between 1 and 3',
      ])
    })

    test('not between', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'not between', [1, 3]]],
      })
      expect(orm.log()).toEqual([
        'select [id] from [users] where [id] not between 1 and 3',
      ])
    })

    test('null', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', null]],
      })
      expect(orm.log()).toEqual(['select [id] from [users] where [id] is null'])
    })

    test('not null', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'is not', null]],
      })
      expect(orm.log()).toEqual([
        'select [id] from [users] where [id] is not null',
      ])
    })

    test('like', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'like', 'a%']],
      })
      expect(orm.log()).toEqual([
        "select [id] from [users] where [id] like 'a%'",
      ])
    })

    test('not like', async () => {
      await orm({
        from: 'users',
        select: ['id'],
        where: [['id', 'not like', 'a%']],
      })
      expect(orm.log()).toEqual([
        "select [id] from [users] where [id] not like 'a%'",
      ])
    })

    test('offset, limit', async () => {
      await orm({
        from: 'user',
        limit: 10,
        offset: 5,
      })
      expect(orm.log()).toEqual([
        'select * from [user] offset 5 rows fetch next 10 rows only',
      ])
    })

    test('count, min, max, avg, sum', async () => {
      await orm({
        from: 'users',
        count: ['id as count'],
        min: ['id as min'],
        max: ['id as max'],
        avg: ['id as avg'],
        sum: ['id as sum'],
      })
      expect(orm.log()).toEqual([
        'select count([id]) as [count], min([id]) as [min], max([id]) as [max], avg([id]) as [avg], sum([id]) as [sum] from [users]',
      ])
    })

    test('groupBy', async () => {
      await orm({
        from: 'users',
        groupBy: ['id', 'name'],
      })
      expect(orm.log()).toEqual(['select * from [users] group by [id], [name]'])
    })

    test('orderBy', async () => {
      await orm({
        from: 'users',
        orderBy: [
          ['id', 'asc'],
          ['name', 'desc'],
        ],
      })
      expect(orm.log()).toEqual([
        'select * from [users] order by [id] asc, [name] desc',
      ])
    })

    test('deve executar query raw', async () => {
      await orm({ raw: ['select * from user where id>=?', ['1']] })

      expect(orm.log()).toEqual(["select * from user where id>='1'"])
    })
  })

  describe('update', () => {
    test('update', async () => {
      await orm({ update: { id: 1 }, from: 'user' })
      expect(orm.log()).toEqual([
        'update [user] set [id] = 1;select @@rowcount',
      ])
    })

    test('update returning', async () => {
      await orm({ update: { id: 1 }, from: 'users', returning: ['id'] })
      expect(orm.log()).toEqual([
        'update [users] set [id] = 1 output inserted.[id]',
      ])
    })

    test('increment', async () => {
      await orm({
        from: 'user',
        increment: ['id', 2],
      })
      expect(orm.log()).toEqual([
        'update [user] set [id] = [id] + 2;select @@rowcount',
      ])
    })
  })

  describe('insert', () => {
    test('insert', async () => {
      await orm({ insert: { id: 1 }, from: 'user' })
      expect(orm.log()).toEqual(['insert into [user] ([id]) values (1)'])
    })
    test('insert returning', async () => {
      await orm({ insert: { id: 1 }, from: 'users', returning: ['id'] })
      expect(orm.log()).toEqual([
        'insert into [users] ([id]) output inserted.[id] values (1)',
      ])
    })
  })

  describe('delete', () => {
    test('delete', async () => {
      await orm({ delete: true, from: 'user' })
      expect(orm.log()).toEqual(['delete from [user];select @@rowcount'])
    })
    test('delete where returning', async () => {
      await orm({
        delete: true,
        where: [['id', 1]],
        from: 'users',
        returning: ['id'],
      })
      expect(orm.log()).toEqual([
        'delete from [users] output deleted.[id] where [id] = 1',
      ])
    })
  })
})
