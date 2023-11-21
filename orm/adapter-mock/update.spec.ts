import { driverMock } from '@/orm/driver-mock/driver-mock.js'
import { describe, expect, test } from 'vitest'
import { adapterMock } from './adapter-mock.js'

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
