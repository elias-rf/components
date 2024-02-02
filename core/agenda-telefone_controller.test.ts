import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { agendaTelefoneController } from './agenda-telefone_controller.js'

describe('agendaTelefoneController', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)

  beforeEach(() => {
    dbOftalmo.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('phonebook').response([{ id: '1' }])
    const rsp = await agendaTelefoneController.agendaTelefone_list({
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })
    expect(rsp).toEqual([{ id: '1' }])
    expect(dbOftalmo.log()).toEqual([
      'select * from [phonebook] where [id] = 1 order by [id] asc',
    ])
  })

  test('read', async () => {
    tracker.on.select('phonebook').response({ id: '1' })

    const rsp = await agendaTelefoneController.agendaTelefone_read({
      where: [['id', 1]],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(dbOftalmo.log()).toEqual([
      'select top (1) * from [phonebook] where [id] = 1',
    ])
  })

  test('delete', async () => {
    tracker.on.delete('phonebook').response(1)

    const rsp = await agendaTelefoneController.agendaTelefone_del({
      where: [['id', 1]],
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.log()).toEqual([
      'delete from [phonebook] where [id] = 1;select @@rowcount',
    ])
  })

  test('update', async () => {
    tracker.on.update('phonebook').response({ id: 10 })
    tracker.on.select('phonebook').response([{ id: 10 }])
    dbOftalmo.startLog()
    const rsp = await agendaTelefoneController.agendaTelefone_update({
      where: [['id', 1]],
      data: { id: 10 },
      returning: ['id'],
      debug: false,
    })
    expect(rsp).toEqual({ id: 10 })
    expect(dbOftalmo.log()).toEqual([
      'update [phonebook] set [id] = 10 output inserted.[id] where [id] = 1',
    ])
  })

  test('create', async () => {
    tracker.on.insert('phonebook').response(1)

    const rsp = await agendaTelefoneController.agendaTelefone_create({
      data: { id: 10 },
    })

    expect(rsp).toEqual(1)
    expect(dbOftalmo.log()).toEqual([
      'insert into [phonebook] ([id]) values (10)',
    ])
  })
})
