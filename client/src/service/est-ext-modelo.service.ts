import isEmpty from "@/utils/is/is-empty";
import type { Schema } from "../..";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EstExtModeloService(client: KnexRequest) {
  const service = {
    async schema(): Promise<Schema> {
      return {
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
            type: "string",
          },
        ],
      };
    },

    list: async (dia: string, produto: string) => {
      if (isEmpty(dia) || isEmpty(produto)) {
        return [];
      }
      const response = await client("oftalmo", {
        from: [
          {
            raw: "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt",
          },
        ],
        select: [
          {
            raw: "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade",
          },
        ],
        where: [
          ["tEsterilizacaoExterna.Data", dia],
          { raw: `IsNull([fkCategoria],'Metil')='${produto}'` },
        ],
        orderBy: [["NomeProdutoItem", "desc"]],
        groupBy: ["NomeProdutoItem"],
      });
      return response;
    },
  };
  return service;
}
