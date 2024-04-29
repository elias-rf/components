import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { list } from './list.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = list(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('lista sem argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await useCase({})
    expect(rsp).toEqual([{ id: 1 }])
    expect(planoDb.log()).toEqual(['select * from [CadCli]'])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('CadCli').response([{ CdCliente: 1 }])
    const rsp = await useCase({
      where: [['id', 1]],
      select: ['id'],
    })
    expect(rsp).toEqual([{ id: 1 }])
    expect(planoDb.log()).toEqual([
      'select [CdCliente] from [CadCli] where [CdCliente] = 1',
    ])
  })
})
