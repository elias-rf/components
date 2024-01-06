import { driverMock } from '@/utils/orm/driver-mock/driver-mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { adapterMock } from './adapter-mock.js'

describe('adapterMock', () => {
  const data = {
    users: [
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Paul' },
    ],
  }
  const dbMock = driverMock(data)
  const orm = adapterMock(dbMock)

  beforeEach(() => {
    orm.startLog()
  })
  describe('select', () => {
    test('from', async () => {
      expect(await orm({ from: 'users' })).toEqual(data.users)
      expect(orm.log()).toEqual(['{"from":"users"}'])
    })

    test('select from', async () => {
      expect(await orm({ select: ['id'], from: 'users' })).toEqual([
        { id: 2 },
        { id: 1 },
        { id: 3 },
      ])
      expect(orm.log()).toEqual(['{"select":["id"],"from":"users"}'])
    })

    test('select múltiplo', async () => {
      expect(await orm({ select: ['id', 'name'], from: 'users' })).toEqual([
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
      ])

      expect(orm.log()).toEqual(['{"select":["id","name"],"from":"users"}'])
    })

    test('where', async () => {
      await orm({
        select: ['id'],
        from: 'users',
        where: [
          ['id', '=', 1],
          ['name', 'like', '%test%'],
        ],
      })

      expect(orm.log()).toEqual([
        '{"select":["id"],"from":"users","where":[["id","=",1],["name","like","%test%"]]}',
      ])
    })
  })

  describe('insert', () => {
    const data = {
      users: [
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
      ],
    }
    const dbMock = driverMock(data)
    const orm = adapterMock(dbMock)
    orm.startLog()

    test('insert', async () => {
      expect(
        await orm({ insert: { id: 9, name: 'Joe' }, from: 'users' })
      ).toEqual([
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
        { id: 9, name: 'Joe' },
      ])
      expect(orm.log()).toEqual([
        '{"operation":"insert","insert":{"id":9,"name":"Joe"},"from":"users"}',
      ])
    })
    test('insert returning', async () => {
      orm.startLog()
      expect(
        await orm({
          insert: { id: 10, name: 'Jack' },
          from: 'users',
          select: ['id'],
        })
      ).toEqual([{ id: 2 }, { id: 1 }, { id: 3 }, { id: 9 }, { id: 10 }])
      expect(orm.log()).toEqual([
        '{"operation":"insert","insert":{"id":10,"name":"Jack"},"from":"users","select":["id"]}',
      ])
    })
  })

  describe('update', () => {
    const data = {
      users: [
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
      ],
    }
    const dbMock = driverMock(data)
    const orm = adapterMock(dbMock)
    orm.startLog()

    test('update', async () => {
      orm.startLog()
      expect(
        await orm({
          update: { name: 'fulano' },
          from: 'users',
          where: [['id', 1]],
        })
      ).toEqual([{ id: 1, name: 'fulano' }])
      expect(orm.log()).toEqual([
        '{"operation":"update","update":{"name":"fulano"},"from":"users","where":[["id",1]]}',
      ])
    })
    test('update returning', async () => {
      orm.startLog()
      expect(
        await orm({
          update: { name: 'cicrano' },
          from: 'users',
          where: [['id', 1]],
          select: ['name'],
        })
      ).toEqual([{ name: 'cicrano' }])
      expect(orm.log()).toEqual([
        '{"operation":"update","update":{"name":"cicrano"},"from":"users","where":[["id",1]],"select":["name"]}',
      ])
    })

    // test('increment', async () => {
    //   await orm({
    //     from: 'users',
    //     increment: ['id', 2],
    //   })

    //   expect(orm.log).toEqual([
    //     {
    //       bindings: [2],
    //       sql: 'update [users] set [id] = [id] + @p0;select @@rowcount',
    //     },
    //   ])
    // })
  })

  describe('del', () => {
    test('del', async () => {
      const data = {
        users: [
          { id: 2, name: 'Jane' },
          { id: 1, name: 'John' },
          { id: 3, name: 'Paul' },
        ],
      }
      const dbMock = driverMock(data)
      const orm = adapterMock(dbMock)
      orm.startLog()
      expect(await orm({ del: true, from: 'users' })).toEqual(3)
      expect(orm.log()).toEqual(['{"operation":"delete","from":"users"}'])
    })
    test('del where', async () => {
      const data = {
        users: [
          { id: 2, name: 'Jane' },
          { id: 1, name: 'John' },
          { id: 3, name: 'Paul' },
        ],
      }
      const dbMock = driverMock(data)
      const orm = adapterMock(dbMock)
      orm.startLog()
      expect(
        await orm({ del: true, from: 'users', where: [['id', '=', 1]] })
      ).toEqual(1)
      expect(orm.log()).toEqual([
        '{"operation":"delete","from":"users","where":[["id","=",1]]}',
      ])
    })
  })
})
