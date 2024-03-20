import { produtoItemController } from '@/core/produto-item/produto-item_controller.js'
import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { produtoPlano } from './produto-plano.js'

describe('ordemProducaoController', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = produtoPlano(dataSource, { produtoItemController })

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  it('produtoPlano', async () => {
    tracker.on.select('tOrdemProducao').response([{ fkProdutoItem: 1 }])
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 1, fkProduto: 1, IdVisiontech: '1' }])
    tracker.on.select('CadPro').response([{ CdProduto: 1 }])

    const rsp = await useCase({
      id: [['id', 1]],
      select: ['id'],
    })

    expect(rsp).toEqual({ id: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) [CdProduto] from [CadPro] where [CdProduto] = @p1',
      },
    ])
  })
})
