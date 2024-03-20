import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { count } from './count.js'

describe('count', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = count(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('count', async () => {
    tracker.on.select('Lotes').response([{ ttl: '1' }])
    const rsp = await useCase({
      where: [['produtoId', 1]],
    })
    expect(planoDb.log()).toEqual([
      'select count(*) as [ttl] from [Lotes] where [CdProduto] = 1',
    ])
    expect(rsp).toEqual([{ ttl: '1' }])
  })
})
