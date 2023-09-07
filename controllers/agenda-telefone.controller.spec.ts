import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { agendaTelefoneController } from './agenda-telefone.controller'
import { describe, expect, it } from 'vitest'
import { knexMockMsql } from '@/mocks/connections.mock'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'

describe('agendaTelefoneController', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql

  it('list', async () => {
    tracker.reset()
    tracker.on.select('phonebook').response([{ id: '1' }])

    const rsp = await agendaTelefoneController.list({
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })

    expect(rsp).toEqual([{ id: '1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) * from [phonebook] where [id] = @p1 order by [id] asc',
      },
    ])
  })

  it('read', async () => {
    tracker.reset()
    tracker.on.select('phonebook').response({ id: '1' })

    const rsp = await agendaTelefoneController.read({
      id: [['id', 1]],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) * from [phonebook] where [id] = @p1',
      },
    ])
  })

  it('delete', async () => {
    tracker.reset()
    tracker.on.delete('phonebook').response(1)

    const rsp = await agendaTelefoneController.del({
      id: [['id', 1]],
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'delete from [phonebook] where [id] = @p0;select @@rowcount',
      },
    ])
  })

  it('update', async () => {
    tracker.reset()
    tracker.on.update('phonebook').response({ id: 10 })
    tracker.on.select('phonebook').response([{ id: 10 }])

    const rsp = await agendaTelefoneController.update({
      id: [['id', 1]],
      data: { id: 10 },
      returning: ['id'],
    })

    expect(rsp).toEqual({ id: 10 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, 1],
        sql: 'update [phonebook] set [id] = @p0 output inserted.[id] where [id] = @p1',
      },
    ])
  })

  it('create', async () => {
    tracker.reset()
    tracker.on.insert('phonebook').response(1)

    const rsp = await agendaTelefoneController.create({
      data: { id: 10 },
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'insert into [phonebook] ([id]) values (@p0)',
      },
    ])
  })
})
