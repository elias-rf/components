import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { TNfTransferenciaDiario } from "../nf-saida.type";

export function transferenciaDiario({
  connection,
}: {
  connection: Knex;
}): TNfTransferenciaDiario {
  return async ({ inicio, fim }) => {
    zod(inicio, zd.string().superRefine(zsr.date));
    zod(fim, zd.string().superRefine(zsr.date));

    const aux: any = {};
    const rsp = [];
    const qry: any = await connection<
      any,
      { dia: string; NmCategoria: string; quantidade: number }
    >(
      connection.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        connection.raw(
          "CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("[MestreNota].[DtEmissao] desc")
      .groupByRaw("[MestreNota].[DtEmissao], CategPro.NmCategoria")
      .where(
        connection.raw("[MestreNota].[DtEmissao] between ? and ?", [
          inicio,
          fim,
        ])
      )
      .andWhere(
        connection.raw(
          "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
        )
      );

    for (const item of qry) {
      aux[item.dia] = {
        ...aux[item.dia],
        ...{ [item.NmCategoria]: item.quantidade },
      };
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { dia: key, ...(<any>value) };
      rsp.push(item);
    }
    return rsp;
  };
}
