import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { produto } from './produto.mjs'

describe('mensal', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = produto(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('diario', async () => {
    tracker.on
      .select('tEsterilizacaoExterna')
      .response([{ dia: '2020-01-01', quantidade: 10 }])
    const rsp = await useCase({
      data: '2020-01-01',
    })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01'],
        sql: "select IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoExterna.Data=@p0 group by [fkCategoria] order by [fkCategoria] desc",
      },
    ])
    expect(rsp).toEqual([{ dia: '2020-01-01', quantidade: 10 }])
  })
})
