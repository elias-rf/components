import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../mocks/connections.mock.js'
import { getTracker } from '../../mocks/database.mock.js'
import { knexMockHistory } from '../../mocks/knex-mock-history.js'
import { AdapterKnex } from './adapter-knex.js'

describe('insert', () => {
  const orm = new AdapterKnex(knexMockMsql)
  const tracker = getTracker()

  beforeEach(() => {
    tracker.reset()
    tracker.on.insert('users').response(1)
  })

  test('insert', async () => {
    await orm.run({ insert: { id: 1 }, from: 'users' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'insert into [users] ([id]) values (@p0)',
      },
    ])
  })
  test('insert returning', async () => {
    await orm.run({
      insert: { id: 1 },
      from: 'users',
      returning: ['id', 'name'],
    })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'insert into [users] ([id]) output inserted.[id], inserted.[name] values (@p0)',
      },
    ])
  })
})
