import * as v from 'valibot'

export const mensal =
  (dataSource) =>
  async ({ mes }) => {
    v.parse(
      v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      mes
    )
    const knex = dataSource.oftalmo.ds.getDriver()
    const qry = await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          'CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade'
        )
      )
      .orderByRaw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc')
      .groupBy(knex.raw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)'))
      .where(
        knex.raw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=?', [mes])
      )
    return qry
  }
