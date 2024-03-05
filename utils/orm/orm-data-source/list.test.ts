import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { adapterKnex } from '../adapter-knex.js'
import { ormTableDataSource } from './index.js'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
  dto: { id: 'id', nome: 'name', setor: 'department', email: 'email' },
}

describe('list', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  test('list', async () => {
    tracker.on.select('from [phonebook]').response([{ id: 1 }])
    const rsp = await tb.rpc.list({
      where: [
        ['id', 1],
        ['name', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['name', 'desc'],
      ],
      limit: 50,
      select: ['id', 'name'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [id], [name] from [phonebook] where [id] = 1 and [name] > 'a' order by [id] asc, [name] desc",
    ])
  })
})
