import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { diario } from './diario.js'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = diario(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('transferenciaDiario', async () => {
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ dia: '2020-01-01', quantidade: 10 }])
    const rsp = await useCase({
      operacao: 1010,
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(oftalmoDb.log()).toEqual([
      "select [DataInicio] as [dia], sum([QtdConforme]) as [quantidade] from [tOperacaoOrdemProducao] where [fkOperacao] = 1010 and [DataInicio] between '2020-01-01' and '2020-01-31' group by [DataInicio] order by [DataInicio] desc",
    ])
    expect(rsp).toEqual([
      { dia: '2020-01-01', diaSemana: 'qua', quantidade: 10 },
    ])
  })
})
