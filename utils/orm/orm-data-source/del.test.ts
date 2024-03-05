import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { adapterKnex } from '../adapter-knex.js'
import { ormTableDataSource } from './index.js'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('del', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('del', async () => {
    tracker.on.delete('phonebook').response(1)
    const rsp = await tb.rpc.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [phonebook] where [id] = 10;select @@rowcount',
    ])
  })
})
