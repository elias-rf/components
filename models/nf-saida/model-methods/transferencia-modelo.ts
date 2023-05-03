import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { TNfTransferenciaModelo } from "../nf-saida.type";

export function transferenciaModelo({
  connection,
}: {
  connection: Knex;
}): TNfTransferenciaModelo {
  return async ({ data }) => {
    zod(data, zd.string().superRefine(zsr.date));
    const qry = await connection(
      connection.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        connection.raw(
          "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CadPro.Descricao asc")
      .groupBy(connection.raw("CadPro.Descricao"))
      .where(connection.raw("MestreNota.DtEmissao = ?", [data]))
      .andWhere(
        connection.raw(
          "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
        )
      );
    return qry;
  };
}
