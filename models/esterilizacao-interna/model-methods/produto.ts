import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";

export function produto(connection: Knex) {
  return async ({
    data,
  }: {
    data: string;
  }): Promise<{ produto: string; quantidade: number }[]> => {
    zod(data, zd.string().superRefine(zsr.date));
    const qry = await connection(
      connection.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        connection.raw(
          "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderBy("tbl_Produto.fkCategoria", "asc")
      .groupBy(["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"])
      .where({ DataInicio: data })
      .where(connection.raw("fkOperacao in (3058, 3158)"));
    return qry;
  };
}
