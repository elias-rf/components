import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { dbPlano } from '@/core/db/db-plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { produtoItemController } from './produto-item_controller.js'

describe('produtoItemController', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    dbPlano.startLog()
    dbOftalmo.startLog()
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tbl_Produto_Item').response([{ kProdutoItem: 1 }])
    const rsp = await produtoItemController.produtoItem_list({
      where: [['kProdutoItem', 1]],
      orderBy: [['kProdutoItem', 'asc']],
    })

    expect(rsp).toEqual([{ kProdutoItem: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'select * from [tbl_Produto_Item] where [kProdutoItem] = @p0 order by [kProdutoItem] asc',
      },
    ])
  })

  test('produtoPlano', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 10, IdVisiontech: '1' }])
    tracker.on.select('CadPro').response([{ CdProduto: '1' }])

    const rsp = await produtoItemController.produtoItem_produtoPlano({
      id: [['kProdutoItem', 10]],
      select: ['CdProduto'],
    })
    expect(dbOftalmo.log()).toEqual([
      'select top (1) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
    expect(dbPlano.log()).toEqual([
      "select top (1) [CdProduto] from [CadPro] where [CdProduto] = '1'",
    ])
    expect(rsp).toEqual({ CdProduto: '1' })
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

  it('read', async () => {
    tracker.on.select('tbl_Produto_Item').response([{ kProdutoItem: 1 }])
    const rsp = await produtoItemController.produtoItem_read({
      where: [['kProdutoItem', 1]],
    })

    expect(rsp).toEqual({ kProdutoItem: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) * from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
    ])
  })

  it('read with include', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 1, fkProduto: 1 }])
    tracker.on.select('tbl_Produto').response([{ kProduto: 1 }])
    const rsp = await produtoItemController.produtoItem_read({
      where: [['kProdutoItem', 1]],
      include: { produto: ['kProduto'] },
    })

    expect(rsp).toEqual({
      kProdutoItem: 1,
      fkProduto: 1,
      produto: { kProduto: 1 },
    })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [fkProduto] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProduto] from [tbl_Produto] where [kProduto] = @p1',
      },
    ])
  })
})
