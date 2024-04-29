import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { read } from './read.mjs'

describe('read', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = read(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('NfLogConferencia').response([{ CdFilial: '1' }])

    const rsp = await useCase({
      where: [
        ['empresaId', 1],
        ['modelo', 1],
        ['serie', 1],
        ['numero', 1],
      ],
      select: ['empresaId', 'fornecedorId'],
    })
    expect(planoDb.log()).toEqual([
      'select top (1) [CdFilial], [CdFornecedor] from [NfLogConferencia] where [CdFilial] = 1 and [Modelo] = 1 and [Serie] = 1 and [NumNota] = 1',
    ])
    expect(rsp).toEqual({ empresaId: '1' })
  })
})
