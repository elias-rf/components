import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { dbPlano } from '@/controllers/db-plano.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { produtoItemController } from './produto-item.controller'

describe('produtoItemController', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbPlano.startLog()
    dbOftalmo.startLog()
    tracker.reset()
  })

  // it("list nested", async () => {
  //   tracker.on
  //     .select("tbl_Produto_Item")
  //     .response([{ kProdutoItem: "1", fkProduto: "1" }]);
  //   tracker.on.select("tbl_Produto").response([{ kProduto: "1" }]);
  //   const rsp = await produtoItemController.list({
  //     filter: { kProdutoItem: "1" },
  //     sort: { kProdutoItem: "asc" },
  //     select: ["kProdutoItem", { produto: ["kProduto"] }],
  //   });

  //   expect(rsp).toEqual([{ kProdutoItem: "1", produto: { kProduto: "1" } }]);
  //   expect(knexMockHistory(tracker)).toEqual([
  //     {
  //       bindings: [50, "1"],
  //       sql: "select top (@p0) [kProdutoItem], [tbl_Produto_Item].[fkProduto] from [tbl_Produto_Item] where ([kProdutoItem] = @p1) order by [kProdutoItem] asc",
  //     },
  //     {
  //       bindings: ["1"],
  //       sql: "select [kProduto] from [tbl_Produto] where [tbl_Produto].[kProduto] in (@p0)",
  //     },
  //   ]);
  // });

  it('list', async () => {
    tracker.on.select('tbl_Produto_Item').response([{ kProdutoItem: 1 }])
    const rsp = await produtoItemController.list({
      filter: [['kProdutoItem', 1]],
      sort: [['kProdutoItem', 'asc']],
    })

    expect(rsp).toEqual([{ kProdutoItem: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) * from [tbl_Produto_Item] where [kProdutoItem] = @p1 order by [kProdutoItem] asc',
      },
    ])
  })

  test('produtoPlano', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 10, IdVisiontech: '1' }])
    tracker.on.select('CadPro').response([{ CdProduto: '1' }])

    const rsp = await produtoItemController.produtoPlano({
      id: [['kProdutoItem', 10]],
      select: ['CdProduto'],
    })
    expect(dbOftalmo.sql()).toEqual([
      'select top (1) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
    expect(dbPlano.sql()).toEqual([
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
    const rsp = await produtoItemController.read({
      id: [['kProdutoItem', 1]],
    })

    expect(rsp).toEqual({ kProdutoItem: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) * from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
    ])
  })
})
