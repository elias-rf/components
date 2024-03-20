import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

export const produto =
  (dataSource: TDataSource) =>
  async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    v.parse(
      v.object({ data: v.string([v.isoDate('data inicial inválida')]) }),
      {
        data,
      }
    )
    const knex = dataSource.oftalmo.ds.getDriver()
    const qry = (await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy('fkCategoria', 'desc')
      .groupBy('fkCategoria')
      .where(knex.raw('tEsterilizacaoExterna.Data=?', [data]))) as any

    return qry
  }
