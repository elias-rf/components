import { Ids } from "@er/types";

import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export type VendasFvRecord = {
  origem: string;
  NmCategoria: string;
  DtEmissao: string;
  NumNota: string;
  Serie: string;
  Tipo: string;
  CdProduto: string;
  Quantidade: number;
  VlTotal: number;
  Descricao: string;
  CdVendedor: string;
  NmVendedor: string;
  uf: string;
};

export class NfSaidaFvModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_fv");
  }

  // DIARIO
  async vendaDiario(inicio: string, fim: string, uf: string[]) {
    const qry = this.knex(
      this.knex.raw(
        "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
      )
    )
      .select([
        "NmCategoria",
        "MestreNota.DtEmissao",
        this.knex.raw(
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
      .where("mestrenota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereRaw(
        "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE"
      )
      .whereIn("cidadeserf.uf", uf)

      .groupBy("NmCategoria", "MestreNota.DtEmissao")
      .orderBy("NmCategoria")
      .orderBy("MestreNota.DtEmissao", "desc");
    return qry;
  }

  async vendaDiarioSchema() {
    return {
      pk: ["NmCategoria", "DtEmissao"],
      fields: [
        {
          field: "DtEmissao",
          name: "Dia",
          type: "string",
        },
        {
          field: "NmCategoria",
          name: "Produto",
          type: "string",
        },
        {
          field: "qtd",
          name: "Quantidade",
          type: "int",
        },
        {
          field: "vlr",
          label: "Valor",
          type: "float",
        },
      ],
    };
  }

  // MENSAL
  async vendaMensal(inicio: string, fim: string, id: Ids) {
    const qry = this.knex(
      this.knex.raw("MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro")
    )
      .select([
        "CategPro.NmCategoria",
        "MestreNota.CdCliente",
        this.knex.raw(
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
  }

  async vendaMensalSchema() {
    return {
      pk: ["anoMes", "CdCliente"],
      fields: [
        {
          field: "anoMes",
          label: "Mês",
          type: "ID",
        },
        {
          field: "CdCliente",
          label: "Cód. Cliente",
          type: "ID",
        },
        {
          field: "NmCategoria",
          label: "Produto",
          type: "string",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "int",
        },
        {
          field: "valor",
          label: "Valor",
          type: "float",
        },
      ],
    };
  }

  async vendaAnaliticoSchema() {
    return {
      pk: ["anoMes", "CdCliente"],
      fields: [
        {
          field: "NmCategoria",
          label: "Categoria",
          type: "string",
        },
        {
          field: "DtEmissao",
          label: "Emissão",
          type: "date",
        },
        {
          field: "NumNota",
          label: "Nota Fiscal",
          type: "string",
        },
        {
          field: "Serie",
          label: "Série",
          type: "string",
        },
        {
          field: "Tipo",
          label: "Tipo",
          type: "string",
        },
        {
          field: "CdProduto",
          label: "Cód Produto",
          type: "float",
        },
        {
          field: "Quantidade",
          label: "Quantidade",
          type: "float",
        },
        {
          field: "VlTotal",
          label: "Valor",
          type: "float",
        },
        {
          field: "Descricao",
          label: "Produto",
          type: "float",
        },
        {
          field: "CdVendedor",
          label: "Cód Vendedor",
          type: "int",
        },
        {
          field: "NmVendedor",
          label: "Vendedor",
          type: "string",
        },
        {
          field: "uf",
          label: "UF",
          type: "string",
        },
      ],
    };
  }

  async vendaAnalitico(inicio: string, fim: string) {
    return this.knex("MestreNota")
      .select(this.knex.raw("'FV' as origem"))
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
      .where("mestrenota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereIn("MestreNota.Tipo", ["E", "S"]);
  }
}
