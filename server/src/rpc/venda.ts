import { Connections } from "dal/connections";
import createError from "http-errors";
import { CurrentUser } from "../..";
import { Id } from "../../..";

export default function ClienteRpc(connection: Connections) {
  const knexPlano = connection.plano;
  return {
    async diario(
      { inicio, fim, uf }: { inicio: string; fim: string; uf: string[] },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!inicio) throw new createError.BadRequest("Início não informado");
      if (!fim) throw new createError.BadRequest("Fim não informado");
      if (!uf) throw new createError.BadRequest("UF não informado");

      const qry = knexPlano(
        knexPlano.raw(
          "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
        )
      )
        .select([
          "NmCategoria",
          "MestreNota.DtEmissao",
          knexPlano.raw(
            "sum(ItemNota.Quantidade) as quantidade, sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then case mestrenota.cdcliente when 3158 then ItemNota.VlLiquido * -3 else ItemNota.VlLiquido * -1 end when 'S' then case mestrenota.cdcliente when 3158 then ItemNota.VlLiquido * 3 else ItemNota.VlLiquido end end)) as valor"
          ),
        ])
        .where({
          "MestreNota.FgEstatistica": "S",
          "MestreNota.CdFilial": 2,
          "CadPro.FgEstatistica": "S",
          "CadVen.FgControle": "S",
          "ItemNota.ImprimeComponentes": "N",
        })
        .where("ItemNota.Sequencia", ">", 0)
        .where("MestreNota.Tipo", "<>", "C")
        .whereBetween("MestreNota.DtEmissao", [inicio, fim])
        .whereRaw(
          "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE"
        )
        .whereIn("cidadeserf.uf", uf)
        .groupBy("NmCategoria", "MestreNota.DtEmissao")
        .orderBy("NmCategoria")
        .orderBy("MestreNota.DtEmissao", "desc");
      return qry;
    },

    async mensal(
      { inicio, fim, id }: { inicio: string; fim: string; id: Id },
      ctx?: { currentUser: CurrentUser }
    ) {
      if (!inicio) throw new createError.BadRequest("Início não informado");
      if (!fim) throw new createError.BadRequest("Fim não informado");
      if (!id) throw new createError.BadRequest("ID não informado");

      const qry = knexPlano(
        knexPlano.raw("MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro")
      )
        .select([
          "CategPro.NmCategoria",
          "MestreNota.CdCliente",
          knexPlano.raw(
            "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor"
          ),
        ])

        .where({
          "MestreNota.FgEstatistica": "S",
          "MestreNota.CdFilial": 2,
          "CadPro.FgEstatistica": "S",
          "CadVen.FgControle": "S",
          "ItemNota.ImprimeComponentes": "N",
        })
        .where("ItemNota.Sequencia", ">", 0)
        .where("MestreNota.Tipo", "<>", "C")
        .whereBetween("MestreNota.DtEmissao", [inicio, fim])
        .where({ "MestreNota.CdCliente": id[0] })
        .whereRaw(
          "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto"
        )

        .groupBy("CdCliente", "NmCategoria")
        .groupByRaw("CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)")

        .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC");

      return qry;
    },
  };
}
