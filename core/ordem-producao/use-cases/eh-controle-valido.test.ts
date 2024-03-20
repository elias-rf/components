import { ehControleValido } from '@/core/ordem-producao/use-cases/eh-controle-valido.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ordemProducaoController', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = ehControleValido()

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  it('isControleValid true', async () => {
    const rsp = await useCase({
      controle: '000001000017',
    })

    expect(rsp).toEqual(true)
  })

  it('isControleValid false', async () => {
    const rsp = await useCase({
      controle: '000101000017',
    })

    expect(rsp).toEqual(false)
  })
})
