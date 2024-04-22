import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
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
      .response([{ quantidade: 1, dia: new Date('2020-01-01T00:00:00') }])

    const rsp = await useCase({
      mes: '2020-01',
    })

    expect(rsp).toEqual([
      { quantidade: 1, dia: new Date('2020-01-01T00:00:00') },
    ])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01'],
        sql: 'select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where fkOperacao in (3058, 3158) and CONVERT(CHAR(7),[DataInicio],120)>=@p0 group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc',
      },
    ])
  })
})
