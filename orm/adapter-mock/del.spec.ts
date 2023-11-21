import { driverMock } from '@/orm/driver-mock/driver-mock.js'
import { describe, expect, test } from 'vitest'
import { adapterMock } from './adapter-mock.js'

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
