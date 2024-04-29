import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { list } from './list.mjs'

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
