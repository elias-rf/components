import { beforeEach, describe, expect, test } from 'vitest'
import { ordemProducaoOperacaoController } from '../../../core/ordem-producao-operacao/ordem-producao-operacao_controller.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { dataValidade } from './data-validade.mjs'

describe('dataFabricacao useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = dataValidade({ ordemProducaoOperacaoController })

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('dataValidade', async () => {
    tracker.on
      .any('tOperacaoOrdemProducao')
      .response([{ DataHoraInicio: '2020-01-01' }])

    const rsp = await useCase({
      id: [['id', 1]],
    })

    expect(rsp).toEqual('2025-01-01')
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [3059, 1],
        sql: 'select [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = @p0 and [fkOp] = @p1 order by [DataHoraInicio] desc',
      },
    ])
  })
})
