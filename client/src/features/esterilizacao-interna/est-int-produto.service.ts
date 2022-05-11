import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";
import { Schema } from "types";

const EsterilizacaoInternaProdutoService = (client: KnexRequest) => ({
  schema: async (): Promise<Schema> => ({
    pk: ["produto"],
    fields: [
      {
        field: "produto",
        label: "Produto",
        type: "ID",
      },
      {
        field: "quantidade",
        label: "Quantidade",
        type: "Int",
      },
    ],
  }),

  list: async (dia: string) => {
    if (isEmpty(dia)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: [
        {
          raw: "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp",
        },
      ],
      select: [{ produto: "tbl_Produto.fkCategoria" }],
      sum: [{ quantidade: "tOperacaoOrdemProducao.QtdConforme" }],
      groupBy: ["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"],
      orderBy: [["tbl_Produto.fkCategoria"]],
      where: [["DataInicio", dia]],
      whereIn: [["fkOperacao", [3058, 3158]]],
    });
    return response;
  },
});
export default EsterilizacaoInternaProdutoService;
