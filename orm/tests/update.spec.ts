import { knexMockMsql } from '../../mocks/connections.mock'
import { OrmDatabase } from '../orm-database'
import { getTracker } from '../../mocks/database.mock'
import { knexMockHistory } from '../../mocks/knex-mock-history'
import { describe, beforeEach, test, expect } from 'vitest'

describe('update', () => {
  const orm = new OrmDatabase(knexMockMsql)
  const tracker = getTracker()

  beforeEach(() => {
    tracker.reset()
    tracker.on.update('users').response(1)
  })

  test('update', async () => {
    await orm.run({ update: { id: 1 }, from: 'users' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'update [users] set [id] = @p0;select @@rowcount',
      },
    ])
  })
  test('update returning', async () => {
    await orm.run({ update: { id: 1 }, from: 'users', returning: ['id'] })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'update [users] set [id] = @p0 output inserted.[id]',
      },
    ])
  })

  test('increment', async () => {
    await orm.run({
      from: 'users',
      increment: ['id', 2],
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2],
        sql: 'update [users] set [id] = [id] + @p0;select @@rowcount',
      },
    ])
  })
})
