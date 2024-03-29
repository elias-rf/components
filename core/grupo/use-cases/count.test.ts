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
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('count', async () => {
    tracker.on.select('tbl_Seguranca_Grupo').response([{ id: '1' }])
    const rsp = await useCase({
      where: [['id', 1]],
    })
    expect(rsp).toEqual([{ id: '1' }])
    expect(oftalmoDb.log()).toEqual([
      'select count(*) as [ttl] from [tbl_Seguranca_Grupo] where [kGrupo] = 1',
    ])
  })
})
