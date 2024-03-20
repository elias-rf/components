import { produtoPlanoController } from '@/core/produto-plano/produto-plano_controller.js'
import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { produtoPlano } from './produto-plano.js'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = produtoPlano(dataSource, { produtoPlanoController })

  beforeEach(() => {
    oftalmoDb.startLog()
    planoDb.startLog()
    tracker.reset()
  })

  test('produtoPlano', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ id: 10, IdVisiontech: '1' }])
    tracker.on.select('CadPro').response([{ CdProduto: '1' }])

    const rsp = await useCase({
      id: [['id', 10]],
      select: ['id'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
    expect(planoDb.log()).toEqual([
      "select top (1) [CdProduto] from [CadPro] where [CdProduto] = '1'",
    ])
    expect(rsp).toEqual({ id: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 10],
        sql: 'select top (@p0) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) [CdProduto] from [CadPro] where [CdProduto] = @p1',
      },
    ])
  })
})
