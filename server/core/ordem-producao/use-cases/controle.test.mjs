import { beforeEach, describe, expect, test } from 'vitest'
import { controle } from '../../../core/ordem-producao/use-cases/controle.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('controle useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = controle(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('controle', async () => {
    const rsp = await useCase({
      id: [['id', 100]],
      serie: '1',
    })

    expect(rsp).toEqual('000001000017')
  })
})
