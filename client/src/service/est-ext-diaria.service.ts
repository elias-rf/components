import isEmpty from "@/utils/is/is-empty";
import type { Schema } from "../..";
import { KnexRequest } from "@/lib/knex/knex-request";
import day from "../lib/day";

export default function EstExtDiariaService(client: KnexRequest) {
  const service = {
    async schema(): Promise<Schema> {
      return {
        pk: ["dia"],
        fields: [
          {
            field: "dia",
            label: "Dia",
            type: "ID",
          },
          {
            field: "diaSemana",
            label: "Dia Semana",
            type: "string",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            type: "string",
          },
        ],
      };
    },

    list: async (inicio: string, fim: string) => {
      if (isEmpty(inicio) || isEmpty(fim)) {
        return [];
      }
      const response = await client("oftalmo", {
        from: [
          {
            raw: "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt",
          },
        ],
        select: [
          { dia: "tEsterilizacaoexterna.Data" },
          {
            raw: "SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade",
          },
        ],
        where: [
          ["tEsterilizacaoexterna.Data", ">=", inicio],
          ["tEsterilizacaoexterna.Data", "<=", fim],
        ],
        orderByRaw: ["tEsterilizacaoexterna.Data desc"],
        groupByRaw: ["tEsterilizacaoexterna.Data"],
      });
      return response.map((item: any) => {
        item.diaSemana = day.utc(item.dia).format("ddd");
        item.dia = day.utc(item.dia).format("YYYY-MM-DD");
        return item;
      });
    },
  };
  return service;
}
