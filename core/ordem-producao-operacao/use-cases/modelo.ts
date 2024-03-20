import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

export const modelo =
  (dataSource: TDataSource) =>
  async ({
    operacao,
    data,
    produto,
  }: {
    operacao: string
    data: string
    produto: string
  }) => {
    v.parse(
      v.object({
        operacao: v.union([v.string(), v.number()]),
        data: v.string([v.isoDate('data inicial inválida')]),
        produto: v.union([v.string(), v.number()]),
      }),
      {
        operacao,
        data,
        produto,
      }
    )
    const knex = dataSource.oftalmo.ds.getDriver()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .groupBy(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria'
        )
      )
      .where({
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      })
    return qry
  }
