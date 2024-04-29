import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { update } from './update.mjs'

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
    tracker.on.update('NfLogConferencia').response([{ CdFilial: 10 }])
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
      'update [NfLogConferencia] set [CdFilial] = 10 output inserted.[CdFilial] where [CdFilial] = 1 and [Modelo] = 1 and [Serie] = 1 and [NumNota] = 1',
    ])
    expect(rsp).toEqual([{ empresaId: 10 }])
  })
})
