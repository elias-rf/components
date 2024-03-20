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
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ produto: 'tbl_Produto.fkCategoria' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ DataInicio: data })
      .whereIn('fkOperacao', [3058, 3158])
    return qry as { produto: string; quantidade: number }[]
  }
