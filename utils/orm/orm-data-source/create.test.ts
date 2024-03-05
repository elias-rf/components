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

describe('create', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('create with select', async () => {
    tracker.on.insert('phonebook').response({ id: 10 })
    const rsp = await tb.rpc.create({
      data: { id: 10 },
      returning: ['id'],
    })
    expect(rsp).toEqual({ id: 10 })
    expect(db.log()).toEqual([
      'insert into [phonebook] ([id]) output inserted.[id] values (10)',
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('phonebook').response(1)
    const rsp = await tb.rpc.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual(['insert into [phonebook] ([id]) values (1)'])
  })
})
