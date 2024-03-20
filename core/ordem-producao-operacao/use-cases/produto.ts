import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

export const produto =
  (dataSource: TDataSource) =>
  async ({ operacao, data }: { operacao: string; data: string }) => {
    v.parse(
      v.object({
        operacao: v.union([v.string(), v.number()]),
        data: v.string([v.isoDate('data inicial inválida')]),
      }),
      {
        operacao,
        data,
      }
    )
    const knex = dataSource.oftalmo.ds.getDriver()
    const qry = await knex<any, { produto: string; quantidade: number }[]>(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ fkOperacao: operacao, DataInicio: data })
    return qry as { produto: string; quantidade: number }[]
  }
