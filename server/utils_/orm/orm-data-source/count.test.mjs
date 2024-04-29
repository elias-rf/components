import { beforeEach, describe, expect, it, test } from 'vitest'
import { agendaTelefoneSchema } from '../../../data/oftalmo/agenda-telefone/agenda-telefone.schema.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../adapter-knex.mjs'
import { ormTableDataSource } from './index.mjs'

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
