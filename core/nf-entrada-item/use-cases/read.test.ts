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
    tracker.on.select('NFItem').response([{ CdEmpresa: '1' }])

    const rsp = await useCase({
      where: [
        ['empresaId', 1],
        ['modelo', 1],
        ['serie', 1],
        ['numero', 1],
      ],
      select: ['empresaId', 'produtoId'],
    })
    expect(planoDb.log()).toEqual([
      'select top (1) [CdEmpresa], [CdProduto] from [NFItem] where [CdEmpresa] = 1 and [Modelo] = 1 and [Serie] = 1 and [NroNF] = 1',
    ])
    expect(rsp).toEqual({ empresaId: '1' })
  })
})
