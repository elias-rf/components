import { NfSaidaFv } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";
import { zsr } from "@/utils/zod/z-refine";
import { zod } from "@/utils/zod/zod";
import { z } from "zod";

class NfSaidaFvModel extends CrudObjection {
  constructor() {
    super(NfSaidaFv);
  }

  async vendaAnalitico({ inicio, fim }: { inicio: string; fim: string }) {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    const knex = NfSaidaFv.knex();
    const qryPlano = NfSaidaFv.query()
      .select(knex.raw("'FV' as origem"))
      .select([
        "CategPro.NmCategoria",
        "MestreNota.DtEmissao",
        "MestreNota.NumNota",
        "MestreNota.Serie",
        "MestreNota.Tipo",
        "ItemNota.CdProduto",
        "ItemNota.Quantidade",
        "ItemNota.VlTotal",
        "CadPro.Descricao",
        "MestreNota.CdVendedor",
        "CadVen.NmVendedor",
        "CidadesERF.uf",
      ])
      .join("ItemNota", function () {
        this.on("ItemNota.CdFilial", "=", "MestreNota.CdFilial")
          .andOn("ItemNota.NumNota", "=", "MestreNota.NumNota")
          .andOn("ItemNota.Serie", "=", "MestreNota.Serie")
          .andOn("ItemNota.Modelo", "=", "MestreNota.Modelo");
      })
      .join("CadVen", "MestreNota.CdVendedor", "CadVen.CdVendedor")
      .join("CadCli", "MestreNota.CdCliente", "CadCli.CdCliente")
      .join("cidadesErf", "CadCli.Cidade", "cidadesErf.NmCidadeIBGE")
      .join("CadPro", "ItemNota.CdProduto", "CadPro.CdProduto")
      .join("CategPro", "CadPro.CdCategoria", "CategPro.CdCategoria")
      .where({
        "MestreNota.CdFilial": 1,
        "CadVen.FgControle": "S",
        "MestreNota.FgEstatistica": "S",
        "CadPro.FgEstatistica": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .where("ItemNota.Sequencia", "<>", 0)
      .where("MestreNota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereIn("MestreNota.Tipo", ["E", "S"]);
    return qryPlano;
  }

  async vendaDiario({
    inicio,
    fim,
    uf,
  }: {
    inicio: string;
    fim: string;
    uf: string[];
  }) {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    zod(uf, z.array(z.string()));
    const knex = NfSaidaFv.knex();
    const qry = await knex<
      any,
      {
        NmCategoria: string;
        DtEmissao: string;
        quantidade: number;
        valor: number;
      }
    >(
      knex.raw(
        "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
      )
    )
      .select([
        "NmCategoria",
        "MestreNota.DtEmissao",
        knex.raw(
          "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor"
        ),
      ])
      .sum({ quantidade: "ItemNota.Quantidade" })
      .where({
        "MestreNota.FgEstatistica": "S",
        "MestreNota.CdFilial": 1,
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
  }

  async vendaMensalCliente({
    inicio,
    fim,
    cliente,
  }: {
    inicio: string;
    fim: string;
    cliente: number;
  }) {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    zod(cliente, z.number());
    const knex = NfSaidaFv.knex();
    const rsp = knex<
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
        "MestreNota.CdFilial": 1,
        "CadPro.FgEstatistica": "S",
        "CadVen.FgControle": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .select([
        "CategPro.NmCategoria",
        "MestreNota.CdCliente",
        knex.raw(
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
  }
}

export const nfSaidaFvModel = new NfSaidaFvModel();
