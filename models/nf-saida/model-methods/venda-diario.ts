import { zsr } from "@/utils/zod/z-refine";
import { zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { z } from "zod";
import { TNfVendaDiario } from "../nf-saida.type";

export function vendaDiario({
  connection,
}: {
  connection: Knex;
}): TNfVendaDiario {
  return async ({ inicio, fim, uf }) => {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    zod(uf, z.array(z.string()));
    const qry = await connection<
      any,
      {
        NmCategoria: string;
        DtEmissao: string;
        quantidade: number;
        valor: number;
      }
    >(
      connection.raw(
        "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
      )
    )
      .select([
        "NmCategoria",
        "MestreNota.DtEmissao",
        connection.raw(
          "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor"
        ),
      ])
      .sum({ quantidade: "ItemNota.Quantidade" })
      .where({
        "MestreNota.FgEstatistica": "S",
        "MestreNota.CdFilial": 2,
        "CadPro.FgEstatistica": "S",
        "CadVen.FgControle": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .where("ItemNota.Sequencia", ">", 0)
      .where("MestreNota.Tipo", "<>", "C")
      .where("MestreNota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereRaw(
        "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE"
      )
      .whereIn("cidadeserf.uf", uf)
      .groupBy("NmCategoria", "MestreNota.DtEmissao")
      .orderBy("NmCategoria")
      .orderBy("MestreNota.DtEmissao", "desc");
    return qry as {
      NmCategoria: string;
      DtEmissao: string;
      quantidade: number;
      valor: number;
    }[];
  };
}
