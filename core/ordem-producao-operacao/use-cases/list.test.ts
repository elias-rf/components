import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { list } from './list.js'

describe('list useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = list(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response([{ kOperacaoOP: '1' }])
    const rsp = await useCase({
      select: ['id'],
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })
    expect(rsp).toEqual([{ id: '1' }])
    expect(oftalmoDb.log()).toEqual([
      'select [kOperacaoOP] from [tOperacaoOrdemProducao] where [kOperacaoOP] = 1 order by [kOperacaoOP] asc',
    ])
  })
})
