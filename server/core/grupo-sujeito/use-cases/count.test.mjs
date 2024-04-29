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
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('count', async () => {
    tracker.on.select('group').response([{ ttl: 1 }])
    const rsp = await useCase({
      where: [['grupoId', 1]],
    })
    expect(rsp).toEqual([{ ttl: 1 }])
    expect(oftalmoDb.log()).toEqual([
      'select count(*) as [ttl] from [groupSubject] where [idGroup] = 1',
    ])
  })
})
