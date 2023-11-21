import { driverMock } from '@/orm/driver-mock/driver-mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../mocks/connections.mock.js'
import { getTracker } from '../../mocks/database.mock.js'
import { knexMockHistory } from '../../mocks/knex-mock-history.js'
import { adapterMock } from './adapter-mock.js'

describe('select', () => {
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
