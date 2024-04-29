import { beforeEach, describe, expect, test } from 'vitest'
import { planoDb } from '../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../utils/mocks/knex-mock-history.mjs'
import { clienteController } from './cliente.controller.mjs'

describe('rpc de cliente', () => {
  const tracker = getTracker()
  planoDb.setDriver(knexMockMsql)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.cliente_read({
      where: [['id', 1]],
      select: ['id'],
    })
    expect(rsp).toEqual({ id: 1 })
    expect(planoDb.log()).toEqual([
      'select top (1) [CdCliente] from [CadCli] where [CdCliente] = 1',
    ])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [CdCliente] from [CadCli] where [CdCliente] = @p1',
      },
    ])
  })

  test('create e del', async () => {
    tracker.on.insert('CadCli').response([{ CdCliente: 1 }])
    tracker.on.delete('CadCli').response(1)

    const crt = await clienteController.cliente_create({
      data: {
        id: 1,
        cadastroData: '2020-01-01',
        email: '',
      },
      returning: ['id'],
    })

    expect(crt).toEqual([
      {
        id: 1,
      },
    ])

    const dlt = await clienteController.cliente_del({
      where: [['id', 10]],
    })
    expect(dlt).toEqual(1)
    expect(planoDb.log()).toEqual([
      "insert into [CadCli] ([CdCliente], [DtCadastro], [EMail]) output inserted.[CdCliente] values (1, '2020-01-01', '')",
      'delete from [CadCli] where [CdCliente] = 10;select @@rowcount',
    ])
  })

  test('update', async () => {
    tracker.on.update('CadCli').response([{ CdCliente: 1 }])
    const rsp = await clienteController.cliente_update({
      where: [['id', 1]],
      data: { email: '' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 1 }])
    expect(planoDb.log()).toEqual([
      "update [CadCli] set [EMail] = '' output inserted.[CdCliente] where [CdCliente] = 1",
    ])
  })
})
