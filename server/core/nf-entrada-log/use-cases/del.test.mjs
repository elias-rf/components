import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { del } from './del.mjs'

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
