import { zsr } from "@mono/utils/zod/z-refine";
import { zod } from "@mono/utils/zod/zod";
import { Knex } from "knex";
import { z } from "zod";
import { TNfVendaMensalCliente } from "../nf-saida.type";

export function vendaMensalCliente({
  connection,
}: {
  connection: Knex;
}): TNfVendaMensalCliente {
  return async ({ inicio, fim, cliente }) => {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    zod(cliente, z.number());
    const rsp = connection<
      any,
      {
        NmCategoria: string;
        CdCliente: number;
        anoMes: string;
        quantidade: number;
        valor: number;
      }
    >("MestreNota")
      .join("ItemNota", {
        "MestreNota.CdFilial": "ItemNota.CdFilial",
        "MestreNota.Serie": "ItemNota.Serie",
        "MestreNota.Modelo": "ItemNota.Modelo",
        "MestreNota.NumNota": "ItemNota.NumNota",
      })
      .join("NatOpe", { "NatOpe.Nop": "MestreNota.Nop" })
      .join("CadVen", { "CadVen.CdVendedor": "MestreNota.CdVendedor" })
      .join("CadPro", {
        "CadPro.CdProduto": "ItemNota.CdProduto",
      })
      .join("CategPro", {
        "CadPro.CdCategoria": "CategPro.CdCategoria",
      })
      .where({
        "MestreNota.FgEstatistica": "S",
        "MestreNota.CdFilial": 2,
        "CadPro.FgEstatistica": "S",
        "CadVen.FgControle": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .select([
        "CategPro.NmCategoria",
        "MestreNota.CdCliente",
        connection.raw(
          "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor"
        ),
      ])
      .groupBy("CdCliente", "NmCategoria")
      .groupByRaw("CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)")
      .where("ItemNota.Sequencia", ">", 0)
      .where("MestreNota.Tipo", "<>", "C")
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .where({ "MestreNota.CdCliente": cliente });
    return (await rsp) as {
      NmCategoria: string;
      CdCliente: number;
      anoMes: string;
      quantidade: number;
      valor: number;
    }[];
  };
}
