import { agendaTelefoneSchema } from '@/data/oftalmo/agenda-telefone/agenda-telefone.schema.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { adapterKnex } from '../adapter-knex.js'
import { ormTableDataSource } from './index.js'

describe('count', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, agendaTelefoneSchema)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('phonebook').response([])
    const rsp = await tb.rpc.count({
      where: [[`id`, 10]],
      select: ['id', 'name'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [id], [name], count(*) as [ttl] from [phonebook] where [id] = 10',
    ])
  })
})
