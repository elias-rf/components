import { beforeEach, describe, expect, it, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../adapter-knex.mjs'
import { ormTableDataSource } from './index.mjs'

const phonebook = {
  table: 'phonebook',
  primary: ['id'],
  fields: ['id', 'name', 'department', 'email'],
}

describe('update', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('update', async () => {
    tracker.on.update('phonebook').response([{ id: 10 }])
    const rsp = await tb.rpc.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [phonebook] set [id] = 11 output inserted.[id] where [id] = 10',
    ])
  })
})
