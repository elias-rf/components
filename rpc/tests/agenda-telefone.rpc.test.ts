import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { dbPlano } from '@/controllers/db/db-plano.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { clientMock } from '@/mocks/prim'
import { beforeEach, describe, expect, test } from 'vitest'

describe('agendaTelefoneRpc', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('phonebook').response([{ id: 1 }])

    const rsp = await clientMock.agendaTelefone.list({
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(dbOftalmo.sql()).toEqual([
      'select top (50) * from [phonebook] where [id] = 1 order by [id] asc',
    ])
  })

  test('read', async () => {
    tracker.on.select('phonebook').response([{ id: 1 }])

    const rsp = await clientMock.agendaTelefone.read({
      where: [['id', 1]],
      select: ['id'],
    })

    expect(rsp).toEqual({ id: 1 })
    expect(dbOftalmo.sql()).toEqual([
      'select top (1) [id] from [phonebook] where [id] = 1',
    ])
  })

  test('update', async () => {
    tracker.on.update('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.update({
      id: [['id', 1]],
      data: { name: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.sql()).toEqual([
      "update [phonebook] set [name] = 'test' where [id] = 1;select @@rowcount",
    ])
  })

  test('create', async () => {
    tracker.on.insert('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.create({
      data: { id: 1, name: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.sql()).toEqual([
      "insert into [phonebook] ([id], [name]) values (1, 'test')",
    ])
  })

  test('del', async () => {
    tracker.on.delete('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.del({
      id: [['id', 1]],
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.sql()).toEqual([
      'delete from [phonebook] where [id] = 1;select @@rowcount',
    ])
  })
})
