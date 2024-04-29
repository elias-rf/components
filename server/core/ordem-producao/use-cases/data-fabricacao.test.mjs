import { beforeEach, describe, expect, test } from 'vitest'
import { ordemProducaoOperacaoController } from '../../../core/ordem-producao-operacao/ordem-producao-operacao_controller.mjs'
import { dataFabricacao } from '../../../core/ordem-producao/use-cases/data-fabricacao.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'

describe('dataFabricacao useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = dataFabricacao({ ordemProducaoOperacaoController })

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('dataFabricacao em 3059', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response((sql) => {
      if (sql.bindings.includes(3059)) {
        return [{ DataHoraInicio: '2020-01-01' }]
      }
      return []
    })

    const rsp = await useCase({
      id: [['id', 1]],
    })

    expect(rsp).toEqual('2020-01-01')
    expect(oftalmoDb.log()).toEqual([
      'select [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = 3059 and [fkOp] = 1 order by [DataHoraInicio] desc',
    ])
  })
})
