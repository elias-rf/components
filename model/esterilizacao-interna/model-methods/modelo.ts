import { Knex } from "knex";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";

export function modelo(connection: Knex) {
  return async ({ data, produto }: { data: string; produto: string }) => {
    zod(data, z.string().superRefine(zsr.date));
    zod(produto, z.string());
    const qry = await connection(
      connection.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        connection.raw(
          "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        connection.raw(
          "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
        )
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .where(connection.raw("fkOperacao in (3058, 3158)"));
    return qry;
  };
}
