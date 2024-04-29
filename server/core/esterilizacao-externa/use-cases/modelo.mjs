import * as v from 'valibot'

export const modelo =
  (dataSource) =>
  async ({ data, produto }) => {
    v.parse(
      v.object({
        data: v.string([v.isoDate('data inválida')]),
        produto: v.string(),
      }),
      { data, produto }
    )
    const knex = dataSource.oftalmo.ds.getDriver()
    const qry = await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy('NomeProdutoItem', 'desc')
      .groupBy('NomeProdutoItem')
      .where('tEsterilizacaoExterna.Data', data)
      .where(knex.raw("IsNull([fkCategoria],'Metil')=?", produto))

    return qry
  }
