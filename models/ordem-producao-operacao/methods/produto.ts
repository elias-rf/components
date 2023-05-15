import { zsr } from "@/utils/zod/z-refine";
import { zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { z } from "zod";
import { TOrdemProducaoOperacaoProduto } from "../ordem-producao-operacao.type";

export function produto(connection: Knex): TOrdemProducaoOperacaoProduto {
  return async ({ operacao, data }: { operacao: string; data: string }) => {
    zod(operacao, z.string());
    zod(data, z.string().superRefine(zsr.date));

    const qry = await connection<
      any,
      { produto: string; quantidade: number }[]
    >(
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
      .where({ fkOperacao: operacao, DataInicio: data });
    return qry as { produto: string; quantidade: number }[];
  };
}
