import isEmpty from "@/utils/is/is-empty";
import { Schema } from "types";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EstExtMensalService(client: KnexRequest) {
  const service = {
    schema: async (): Promise<Schema> => ({
      pk: ["mes"],
      fields: [
        {
          field: "mes",
          label: "Mês",
          type: "ID",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "String",
        },
      ],
    }),

    list: async (mes: string) => {
      if (isEmpty(mes)) {
        return [];
      }
      const response = await client("oftalmo", {
        from: [
          {
            raw: "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt",
          },
        ],
        select: [
          {
            raw: "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade",
          },
        ],
        whereRaw: [`CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>='${mes}'`],
        orderByRaw: ["CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc"],
        groupByRaw: ["CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)"],
      });
      return response;
    },
  };
  return service;
}
