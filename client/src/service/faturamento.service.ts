import type { KnexRequest } from "../lib/knex/knex-request";
import day from "@/lib/day";
import { Schema } from "../..";

const FaturamentoService = (client: KnexRequest) => ({
  schemaAnual(): Schema {
    return {
      pk: ["ano"],
      fields: [
        {
          field: "ano",
          label: "Ano",
        },
      ],
    };
  },
  treeAnual(child?: any[]) {
    const response = [];
    for (let a = day().year(); a > 2017; a--) {
      const item: { key: any; label: any; child?: any[] } = {
        key: a,
        label: a,
      };
      if (child) {
        item.child = child;
      }
      response.push(item);
    }
    return response;
  },
  treeMensal() {
    const response = [];
    for (let a = 12; a >= 1; a--) {
      response.push({ key: a, label: a });
    }
    return response;
  },
  listMensal: async (inicio: string, fim: string, [CdCliente]: string[]) => {
    const response = await client("plano", {
      select: [
        "CategPro.NmCategoria",
        "MestreNota.CdCliente",
        "MestreNota.DtEmissao",
        {
          raw: "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum (ItemNota.Quantidade) as quantidade, sum (ItemNota.VlLiquido *  ItemNota.Quantidade ) AS valor",
        },
      ],
      from: [
        {
          raw: "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro",
        },
      ],
      where: [
        ["MestreNota.DtEmissao", ">=", inicio],
        ["MestreNota.DtEmissao", "<=", fim],
        ["MestreNota.FgEstatistica", "S"],
        ["MestreNota.CdFilial", 2],
        ["CadPro.FgEstatistica", "S"],
        ["CadVen.FgControle", "S"],
        ["ItemNota.ImprimeComponentes", "N"],
        ["ItemNota.Sequencia", ">", 0],
        ["MestreNota.Tipo", "<>", "C"],
        ["MestreNota.CdCliente", "<>", 3158],
      ],
      whereRaw: [
        "CadCli.CdCliente = MestreNota.CdCliente",
        "ItemNota.CdFilial = MestreNota.CdFilial",
        "ItemNota.Serie = MestreNota.Serie",
        "ItemNota.Modelo = MestreNota.Modelo",
        "ItemNota.NumNota = MestreNota.NumNota",
        "CadPro.CdCategoria = CategPro.CdCategoria",
        "NatOpe.Nop = MestreNota.Nop",
        "CadVen.CdVendedor = MestreNota.CdVendedor",
        "CadCli.CdCliente = MestreNota.CdCliente",
        "CadPro.CdProduto = ItemNota.CdProduto",
        "cadcli.Cidade = cidadeserf.NmCidadeIBGE",
      ],
      groupBy: [
        "MestreNota.CdCliente",
        "MestreNota.Tipo",
        "CadCli.RzSocial",
        "CadVen.NmVendedor",
        "CadCli.Uf",
        "NmCategoria",
      ],
      groupByRaw: ["CONVERT(char(7), MestreNota.DtEmissao, 126)"],
      orderByRaw: ["CONVERT(char(7), MestreNota.DtEmissao, 126) desc"],
    });

    return response;
  },
});

export default FaturamentoService;
