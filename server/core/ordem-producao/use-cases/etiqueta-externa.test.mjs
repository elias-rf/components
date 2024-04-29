import { beforeEach, describe, expect, it, test } from 'vitest'
import { etiquetaExternaController } from '../../../core/etiqueta-externa/etiqueta-externa_controller.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { etiquetaExterna } from './etiqueta-externa.mjs'

describe('ordemProducaoController', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = etiquetaExterna({ etiquetaExternaController })

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  it('etiquetaExterna', async () => {
    tracker.resetHistory()
    tracker.on.select('tEtiqueta').response([
      {
        controle: '000001000017',
        qtdImpressao: 1,
        dataFabricacao: '2020-01-01',
      },
    ])
    const response = await useCase({
      id: [['kOp', 100]],
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1000, '000001%'],
        sql: 'select top (@p0) * from [tEtiqueta] where [controle] like @p1 order by [controle] asc',
      },
    ])

    expect(response).toEqual([
      {
        fabricacaoData: '2020-01-01',
        id: '000001000017',
        quantidade: 1,
      },
    ])
  })
})
