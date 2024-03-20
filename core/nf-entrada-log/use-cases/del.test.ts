import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { del } from './del.js'

describe('delete useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = del(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('delete', async () => {
    tracker.on.delete('NfLogConferencia').response(1)

    const rsp = await useCase({
      where: [
        ['empresaId', 1],
        ['modelo', 1],
        ['serie', 1],
        ['numero', 1],
      ],
    })

    expect(planoDb.log()).toEqual([
      'delete from [NfLogConferencia] where [CdFilial] = 1 and [Modelo] = 1 and [Serie] = 1 and [NumNota] = 1;select @@rowcount',
    ])
    expect(rsp).toEqual(1)
  })
})
