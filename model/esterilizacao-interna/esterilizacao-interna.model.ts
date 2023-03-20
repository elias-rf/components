import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { z, zod } from "../../utils/zod/z";
import { zsr } from "../../utils/zod/z-refine";
import { esterilizacao_interna } from "./esterilizacao-interna.table";
import type { TEsterilizacaoInternaModel } from "./esterilizacao-interna.type";
import { esterilizacaoInternaMethods } from "./model-methods";

export function esterilizacaoInternaModelFactory({
  connections,
}: {
  connections: TConnections;
}): TEsterilizacaoInternaModel {
  const connection = connections[esterilizacao_interna.database];
  const crud = crudFactory(connection, esterilizacao_interna);

  const model = {
    query: {
      ...crud.query,
      ...esterilizacaoInternaMethods(connection).query,

      // PRODUTO
      async produto({ data }: { data: string }) {
        zod(data, z.string().superRefine(zsr.date));
        const knex = crud.connection;
        const qry = await knex(
          knex.raw(
            "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
          )
        )
          .select(
            knex.raw(
              "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
            )
          )
          .orderBy("tbl_Produto.fkCategoria", "asc")
          .groupBy([
            "tbl_Produto.fkCategoria",
            "tOperacaoOrdemProducao.DataInicio",
          ])
          .where({ DataInicio: data })
          .where(knex.raw("fkOperacao in (3058, 3158)"));
        return qry;
      },
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    esterilizacao_interna,
  };

  return model;
}
