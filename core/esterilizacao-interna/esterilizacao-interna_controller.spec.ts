import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { esterilizacaoInternaController } from './esterilizacao-interna.controller.js'

describe('esterilizacaoInterna', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  test('modelo', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response([])
    const rsp =
      await esterilizacaoInternaController.esterilizacaoInterna_modelo({
        data: '2020-01-01',
        produto: '01',
      })

    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', '01', 3058, 3158],
        sql: 'select [tbl_Produto_Item].[NomeProdutoItem] as [modelo], sum([tOperacaoOrdemProducao].[QtdConforme]) as [quantidade] from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and [fkCategoria] = @p1 and [fkOperacao] in (@p2, @p3) group by [tbl_Produto_Item].[NomeProdutoItem], [tOperacaoOrdemProducao].[DataInicio], [tbl_Produto].[fkCategoria]',
      },
    ])
  })

  test('produto', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response([])
    const rsp =
      await esterilizacaoInternaController.esterilizacaoInterna_produto({
        data: '2020-01-01',
      })

    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', 3058, 3158],
        sql: 'select [tbl_Produto].[fkCategoria] as [produto], sum([tOperacaoOrdemProducao].[QtdConforme]) as [quantidade] from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and [fkOperacao] in (@p1, @p2) group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc',
      },
    ])
  })
})
