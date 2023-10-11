import { knexMockMsql } from '../../mocks/connections.mock'
import { OrmDatabase } from '../orm-database'
import { getTracker } from '../../mocks/database.mock'
import { knexMockHistory } from '../../mocks/knex-mock-history'
import { describe, beforeEach, test, expect } from 'vitest'

describe('insert', () => {
  const orm = new OrmDatabase(knexMockMsql)
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
