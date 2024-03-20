import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

export const modelo =
  (dataSource: TDataSource) =>
  async ({
    data,
    produto,
  }: {
    data: string
    produto: string
  }): Promise<{ modelo: string; quantidade: number }[]> => {
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
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ modelo: 'tbl_Produto_Item.NomeProdutoItem' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .groupBy(
        'tbl_Produto_Item.NomeProdutoItem',
        'tOperacaoOrdemProducao.DataInicio',
        'tbl_Produto.fkCategoria'
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .whereIn('fkOperacao', [3058, 3158])
    return qry as { modelo: string; quantidade: number }[]
  }
