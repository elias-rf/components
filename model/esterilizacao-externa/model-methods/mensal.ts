import { Knex } from "knex";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import { TEsterilizacaoExternaMensal } from "../esterilizacao-externa.type";

export function mensal(connection: Knex): TEsterilizacaoExternaMensal {
  return async ({ mes }: { mes: string }) => {
    zod(mes, z.string().superRefine(zsr.month));
    const qry = await connection(
      connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        connection.raw(
          "CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc")
      .groupBy(
        connection.raw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)")
      )
      .where(
        connection.raw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=?", [
          mes,
        ])
      );
    return qry;
  };
}
