import { modules } from '@/core/index.js'
import { controle } from '@/core/ordem-producao/use-cases/controle.js'
import { dataFabricacao } from '@/core/ordem-producao/use-cases/data-fabricacao.js'
import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'

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
