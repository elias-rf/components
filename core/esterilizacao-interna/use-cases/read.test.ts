import { agendaTelefoneSchema } from '@/data/oftalmo/agenda-telefone/agenda-telefone.schema.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/index.js'
import { ormTableDataSource } from '@/utils/orm/orm-data-source/index.js'
import { beforeEach, describe, expect, it } from 'vitest'

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
