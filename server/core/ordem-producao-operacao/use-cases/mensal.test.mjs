import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { mensal } from './mensal.mjs'

describe('mensal', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = mensal(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('mensal', async () => {
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ dia: '2020-01-01', quantidade: 10 }])
    const rsp = await useCase({
      operacao: 1010,
      mes: '2020-01',
    })
    expect(oftalmoDb.log()).toEqual([
      "select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [fkOperacao] = 1010 group by CONVERT(CHAR(7),[DataInicio],120) having CONVERT(CHAR(7),[DataInicio],120)>='2020-01' order by CONVERT(CHAR(7),[DataInicio],120) desc",
    ])
    expect(rsp).toEqual([{ dia: '2020-01-01', quantidade: 10 }])
  })
})
