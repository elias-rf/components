import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { dbPlano } from '@/controllers/db/db-plano.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { produtoItemController } from './produto-item_controller'

describe('produtoItemController', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbPlano.startLog()
    dbOftalmo.startLog()
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tbl_Produto_Item').response([{ kProdutoItem: 1 }])
    const rsp = await produtoItemController.list({
      where: [['kProdutoItem', 1]],
      orderBy: [['kProdutoItem', 'asc']],
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
    const rsp = await produtoItemController.read({
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
