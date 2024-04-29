import { beforeEach, describe, expect, it } from 'vitest'
import { ehControleValido } from '../../../core/ordem-producao/use-cases/eh-controle-valido.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

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
