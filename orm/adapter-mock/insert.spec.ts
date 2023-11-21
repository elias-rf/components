import { driverMock } from '@/orm/driver-mock/driver-mock.js'
import { describe, expect, test } from 'vitest'
import { adapterMock } from './adapter-mock.js'

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
