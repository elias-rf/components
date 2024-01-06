import { dbPlano } from '@/core/db/db-plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { nfSaidaLoteController } from './nf-saida-lote_controller.js'

describe('agendaTelefoneController', () => {
  const tracker = getTracker()
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    dbPlano.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('LotesNota').response([{ NumNota: '1' }])
    const rsp = await nfSaidaLoteController.nfSaidaLote_list({
      where: [['NumNota', 1]],
      orderBy: [['NumNota', 'asc']],
    })
    expect(rsp).toEqual([{ NumNota: '1' }])
    expect(dbPlano.log()).toEqual([
      'select top (50) * from [LotesNota] where [NumNota] = 1 order by [NumNota] asc',
    ])
  })

  test('read', async () => {
    tracker.on.select('LotesNota').response({ NumNota: '1' })

    const rsp = await nfSaidaLoteController.nfSaidaLote_read({
      where: [
        ['CdFilial', 1],
        ['Modelo', 1],
        ['NumNota', 1],
        ['Sequencia', 1],
        ['Serie', 1],
      ],
    })

    expect(rsp).toEqual({ NumNota: '1' })
    expect(dbPlano.log()).toEqual([
      'select top (1) * from [LotesNota] where [CdFilial] = 1 and [Modelo] = 1 and [NumNota] = 1 and [Sequencia] = 1 and [Serie] = 1',
    ])
  })
})
