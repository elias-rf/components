import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { update } from './update.js'

describe('update', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = update(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('update', async () => {
    tracker.on.update('NFItem').response([{ CdEmpresa: 10 }])
    planoDb.startLog()
    const rsp = await useCase({
      where: [
        ['empresaId', 1],
        ['modelo', 1],
        ['serie', 1],
        ['numero', 1],
      ],
      data: { empresaId: 10 },
      returning: ['empresaId'],
      debug: false,
    })
    expect(planoDb.log()).toEqual([
      'update [NFItem] set [CdEmpresa] = 10 output inserted.[CdEmpresa] where [CdEmpresa] = 1 and [Modelo] = 1 and [Serie] = 1 and [NroNF] = 1',
    ])
    expect(rsp).toEqual([{ empresaId: 10 }])
  })
})
