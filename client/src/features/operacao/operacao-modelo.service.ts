import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

const OperacaoModeloService = (client: KnexRequest): any => ({
  schema: async () => ({
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

  list: async (operacao: string, dia: string, produto: string) => {
    if (isEmpty(operacao) || isEmpty(dia) || isEmpty(produto)) {
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
        "tbl_Produto_Item.NomeProdutoItem",
        "tOperacaoOrdemProducao.DataInicio",
        "tbl_Produto.fkCategoria",
      ],
      where: [
        ["fkOperacao", operacao],
        ["DataInicio", dia],
        ["fkCategoria", produto],
      ],
    });
    return response;
  },
});
export default OperacaoModeloService;
