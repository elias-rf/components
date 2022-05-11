import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";
import { Schema } from "types";

const EsterilizacaoInternaModeloService = (client: KnexRequest) => ({
  schema: async (): Promise<Schema> => ({
    pk: ["modelo"],
    fields: [
      {
        field: "modelo",
        label: "Modelo",
        type: "ID",
      },
      {
        field: "quantidade",
        label: "Quantidade",
        type: "Int",
      },
    ],
  }),

  list: async (dia: string, produto: string) => {
    if (isEmpty(dia) || isEmpty(produto)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: [
        {
          raw: "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp",
        },
      ],
      select: [{ modelo: "tbl_Produto_Item.NomeProdutoItem" }],
      sum: [{ quantidade: "tOperacaoOrdemProducao.QtdConforme" }],
      groupBy: [
        [
          "tbl_Produto_Item.NomeProdutoItem",
          "tOperacaoOrdemProducao.DataInicio",
          "tbl_Produto.fkCategoria",
        ],
      ],
      orderBy: [["DataInicio", "desc"]],
      whereIn: [["fkOperacao", [3058, 3158]]],
      where: [
        ["DataInicio", dia],
        ["fkCategoria", produto],
      ],
    });
    return response;
  },
});
export default EsterilizacaoInternaModeloService;
