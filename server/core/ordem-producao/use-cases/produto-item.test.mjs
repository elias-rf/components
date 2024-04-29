import { beforeEach, describe, expect, it } from 'vitest'
import { produtoItemController } from '../../../core/produto-item/produto-item_controller.mjs'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { produtoItem } from './produto-item.mjs'

describe('produtoItem', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = produtoItem(dataSource, { produtoItemController })

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  it('produtoItem', async () => {
    tracker.on.select('tOrdemProducao').response([{ fkProdutoItem: 1 }])
    tracker.on.select('tbl_Produto_Item').response([{}])
    const rsp = await useCase({
      id: [['id', 1]],
      select: ['id'],
    })

    expect(rsp).toEqual({})
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
    ])
  })
})
