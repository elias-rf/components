import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { clientMock } from '@/mocks/prim.js'
import { beforeEach, describe, expect, test } from 'vitest'

describe('agendaTelefoneRpc', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbPlano.setDriver(knexMockMsql)

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
    expect(dbOftalmo.log()).toEqual([
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
    expect(dbOftalmo.log()).toEqual([
      'select top (1) [id] from [phonebook] where [id] = 1',
    ])
  })

  test('update', async () => {
    tracker.on.update('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.update$({
      where: [['id', 1]],
      data: { name: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.log()).toEqual([
      "update [phonebook] set [name] = 'test' where [id] = 1;select @@rowcount",
    ])
  })

  test('create', async () => {
    tracker.on.insert('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.create$({
      data: { id: 1, name: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.log()).toEqual([
      "insert into [phonebook] ([id], [name]) values (1, 'test')",
    ])
  })

  test('del', async () => {
    tracker.on.delete('phonebook').response(1)

    const rsp = await clientMock.agendaTelefone.del$({
      where: [['id', 1]],
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.log()).toEqual([
      'delete from [phonebook] where [id] = 1;select @@rowcount',
    ])
  })
})
