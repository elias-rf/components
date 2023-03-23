import { Knex } from "knex";
import { z } from "zod";
import { zsr } from "../../../utils/zod/z-refine";
import { zod } from "../../../utils/zod/zod";
import { TOrdemProducaoOperacaoModelo } from "../ordem-producao-operacao.type";

export function modelo(connection: Knex): TOrdemProducaoOperacaoModelo {
  return async ({
    data,
    operacao,
    produto,
  }: {
    data: string;
    operacao: string;
    produto: string;
  }) => {
    zod(operacao, z.string());
    zod(produto, z.string());
    zod(data, z.string().superRefine(zsr.date));

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
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      });
    return qry;
  };
}
