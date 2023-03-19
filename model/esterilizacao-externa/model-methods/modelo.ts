import { TConnection } from "../../../types";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import { TEsterilizacaoExternaModelo } from "../esterilizacao-externa.type";

export function modelo(connection: TConnection): TEsterilizacaoExternaModelo {
  return async ({ data, produto }: { data: string; produto: string }) => {
    zod(data, z.string().superRefine(zsr.date));
    zod(produto, z.string());

    const qry = connection(
      connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        connection.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("NomeProdutoItem", "desc")
      .groupBy("NomeProdutoItem")
      .where("tEsterilizacaoExterna.Data", data)
      .where(connection.raw("IsNull([fkCategoria],'Metil')=?", produto));
    console.log(qry.toString());
    const response = await qry;
    return response;
  };
}
