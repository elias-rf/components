import isEmpty from "@/utils/is/is-empty";
import type { Schema } from "../..";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EstExtProdutoService(client: KnexRequest) {
  const service = {
    async schema(): Promise<Schema> {
      return {
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
            type: "int",
          },
        ],
      };
    },

    list: async (dia: string) => {
      if (isEmpty(dia)) {
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
            raw: "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade",
          },
        ],
        where: [{ raw: `tEsterilizacaoexterna.Data='${dia}'` }],
        orderBy: [["fkCategoria", "desc"]],
        groupBy: ["fkCategoria"],
      });
      return response;
    },
  };
  return service;
}
