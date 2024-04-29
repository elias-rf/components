import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { diario } from './diario.mjs'

describe('diario', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = diario(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('diario', async () => {
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ quantidade: 1, dia: new Date('2020-01-01T00:00:00') }])

    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })

    expect(rsp).toEqual([
      { quantidade: 1, dia: '2020-01-01', dia_semana: 'qua' },
    ])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', '2020-01-31'],
        sql: 'select DataInicio as dia, Sum(QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [DataInicio] between @p0 and @p1 and fkOperacao in (3058, 3158) group by [DataInicio] order by [DataInicio] desc',
      },
    ])
  })
})
