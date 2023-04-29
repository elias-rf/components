import { zsr } from "@mono/utils/zod/z-refine";
import { zd, zod } from "@mono/utils/zod/zod";
import { Knex } from "knex";
import { TNfTransferenciaMensal } from "../nf-saida.type";

export function transferenciaMensal({
  connection,
}: {
  connection: Knex;
}): TNfTransferenciaMensal {
  return async ({ mes }) => {
    zod(mes, zd.string().superRefine(zsr.month));
    const aux: any = {};
    const rsp = [];
    const qry = await connection(
      connection.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        connection.raw(
          "CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc")
      .groupBy(
        connection.raw(
          "CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria"
        )
      )
      .where(
        connection.raw("CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=?", [
          mes,
        ])
      )
      .andWhere(
        connection.raw(
          "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
        )
      );

    for (const item of qry) {
      aux[item.mes] = {
        ...aux[item.mes],
        ...{ [item.NmCategoria]: item.quantidade },
      };
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { mes: key, ...(<any>value) };
      rsp.push(item);
    }

    return rsp;
  };
}
