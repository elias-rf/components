import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { count } from './count.mjs'

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
    tracker.on.select('CadPro').response([{ ttl: '1' }])
    const rsp = await useCase({
      where: [['id', 1]],
    })
    expect(planoDb.log()).toEqual([
      'select count(*) as [ttl] from [CadPro] where [CdProduto] = 1',
    ])
    expect(rsp).toEqual([{ ttl: '1' }])
  })
})
