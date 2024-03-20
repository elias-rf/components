import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { mensal } from './mensal.js'

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
