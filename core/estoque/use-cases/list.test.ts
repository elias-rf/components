import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { list } from './list.js'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = list(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('NfMestre').response([{ NroNf: 1 }])
    const rsp = await useCase({
      where: [['numero', 1]],
      orderBy: [['numero', 'asc']],
      select: ['numero'],
    })
    expect(planoDb.log()).toEqual([
      'select [NroNf] from [NfMestre] where [NroNf] = 1 order by [NroNf] asc',
    ])
    expect(rsp).toEqual([{ numero: 1 }])
  })
})
