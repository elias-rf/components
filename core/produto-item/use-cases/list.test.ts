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
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: '1', nomeProdutoItem: 'prod' }])
    const rsp = await useCase({
      select: ['id', 'nome'],
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })
    expect(oftalmoDb.log()).toEqual([
      'select [kProdutoItem], [NomeProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = 1 order by [kProdutoItem] asc',
    ])
    expect(rsp).toEqual([{ id: '1' }])
  })
})
