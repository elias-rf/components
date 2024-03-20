import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { update } from './update.js'

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
    tracker.on.update('tbl_Produto_Item').response([{ kProdutoItem: 10 }])
    oftalmoDb.startLog()
    const rsp = await useCase({
      where: [['id', 1]],
      data: { id: 10 },
      returning: ['id'],
      debug: false,
    })
    expect(oftalmoDb.log()).toEqual([
      'update [tbl_Produto_Item] set [kProdutoItem] = 10 output inserted.[kProdutoItem] where [kProdutoItem] = 1',
    ])
    expect(rsp).toEqual([{ id: 10 }])
  })
})
