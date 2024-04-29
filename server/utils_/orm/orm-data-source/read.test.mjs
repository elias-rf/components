import { beforeEach, describe, expect, it } from 'vitest'
import { agendaTelefoneSchema } from '../../..//data/oftalmo/agenda-telefone/agenda-telefone.schema.mjs'
import { knexMockMsql } from '../../..//utils/mocks/connections.mock.mjs'
import { getTracker } from '../../..//utils/mocks/database.mock.mjs'
import { adapterKnex } from '../adapter-knex.mjs'
import { ormTableDataSource } from './index.mjs'

describe('read', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, agendaTelefoneSchema)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('read', async () => {
    tracker.on.select('phonebook').response({ id: '1' })
    const rsp = await tb.rpc.read({
      where: [['id', 10]],
      select: ['id', 'name'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [id], [name] from [phonebook] where [id] = 10',
    ])
  })
})
