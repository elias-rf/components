import { beforeEach, describe, expect, test } from 'vitest'
import { knexMockMsql } from '../../mocks/connections.mock.js'
import { getTracker } from '../../mocks/database.mock.js'
import { knexMockHistory } from '../../mocks/knex-mock-history.js'
import { AdapterKnex } from './adapter-knex.js'

describe('del', () => {
  const orm = new AdapterKnex(knexMockMsql)
  orm.startLog()
  const tracker = getTracker()

  beforeEach(() => {
    tracker.reset()
    tracker.on.delete('users').response(1)
    orm.startLog()
  })

  test('del', async () => {
    await orm.run({ del: true, from: 'users' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [],
        sql: 'delete from [users];select @@rowcount',
      },
    ])
    expect(orm.sql()).toEqual(['delete from [users];select @@rowcount'])
  })
  test('del where', async () => {
    await orm.run({ del: true, from: 'users', where: [['id', '=', 1]] })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'delete from [users] where [id] = @p0;select @@rowcount',
      },
    ])
    expect(orm.sql()).toEqual([
      'delete from [users] where [id] = 1;select @@rowcount',
    ])
  })
})
