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
    tracker.on.select('LotesNotaEntrada').response([{ CdFilial: '1' }])
    const rsp = await useCase({
      select: ['empresaId', 'modelo', 'produtoId', 'numero'],
      where: [['empresaId', 1]],
      orderBy: [['empresaId', 'asc']],
    })
    expect(planoDb.log()).toEqual([
      'select [CdFilial], [Modelo], [CdProduto], [NumNota] from [LotesNotaEntrada] where [CdFilial] = 1 order by [CdFilial] asc',
    ])
    expect(rsp).toEqual([{ empresaId: '1' }])
  })
})
