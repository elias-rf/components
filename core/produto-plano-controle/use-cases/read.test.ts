import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { read } from './read.js'

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
    tracker.on.select('Lotes').response([{ CdProduto: '1' }])

    const rsp = await useCase({
      where: [
        ['produtoId', 10],
        ['loteId', 10],
      ],
      select: ['produtoId', 'loteId'],
    })
    expect(planoDb.log()).toEqual([
      'select top (1) [CdProduto], [CdLote] from [Lotes] where [CdProduto] = 10 and [CdLote] = 10',
    ])
    expect(rsp).toEqual({ produtoId: '1' })
  })
})
