import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { update } from './update.mjs'

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
