import { zsr } from "@mono/utils/zod/z-refine";
import { zd, zod } from "@mono/utils/zod/zod";
import { Knex } from "knex";
import { TEsterilizacaoExternaProduto } from "../esterilizacao-externa.type";

export function produto(connection: Knex): TEsterilizacaoExternaProduto {
  return async ({
    data,
  }: {
    data: string;
  }): Promise<{ produto: string; quantidade: number }[]> => {
    zod(data, zd.string().superRefine(zsr.date));

    const qry = connection(
      connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        connection.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(connection.raw("tEsterilizacaoExterna.Data=?", [data]));
    console.log(qry.toString());
    const response = await qry;
    return response;
  };
}
