import { Knex } from "knex";
import { day } from "../../../utils/date/day";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import { TEsterilizacaoExternaDiario } from "../esterilizacao-externa.type";

export function diario(connection: Knex): TEsterilizacaoExternaDiario {
  return async ({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));

    const qry = await connection(
      connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        connection.raw(
          "tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("tEsterilizacaoExterna.Data", "desc")
      .groupBy("tEsterilizacaoExterna.Data")
      .where(
        connection.raw("tEsterilizacaoExterna.Data between ? and ?", [
          inicio,
          fim,
        ])
      );

    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format("ddd");
      return rec;
    });
  };
}