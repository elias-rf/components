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
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('tbl_producao_etiqueta').response([{ NumControle: '1' }])

    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'produtoItemId'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [NumControle], [fkProdutoItem] from [tbl_producao_etiqueta] where [NumControle] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })
})
