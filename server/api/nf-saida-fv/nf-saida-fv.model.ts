import { Schema } from "../../../types";

import { TNfSaidaFv } from "../../../types/nf-saida-fv.type";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export type TVendasFv = {
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

export class NfSaidaFvModel extends Entity<TNfSaidaFv> {
  constructor(connections: TConnections) {
    super(connections, "nf_saida_fv");
  }

  // DIARIO
  async vendaDiario({
    inicio,
    fim,
    uf,
  }: {
    inicio: string;
    fim: string;
    uf: string[];
  }) {
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

  async vendaDiarioSchema(): Promise<Schema> {
    return [
      {
        field: "DtEmissao",
        name: "Dia",
        label: "Dia",
        type: "string",
      },
      {
        field: "NmCategoria",
        name: "Produto",
        label: "Produto",
        type: "string",
      },
      {
        field: "qtd",
        name: "Quantidade",
        label: "Quantidade",
        type: "int",
      },
      {
        field: "vlr",
        name: "Valor",
        label: "Valor",
        type: "float",
      },
    ];
  }

  // MENSAL
  async vendaMensal({
    inicio,
    fim,
    cliente_id,
  }: {
    inicio: string;
    fim: string;
    cliente_id: number;
  }) {
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
      .where({ "MestreNota.CdCliente": cliente_id })
      .whereRaw(
        "ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadPro.CdProduto = ItemNota.CdProduto"
      )

      .groupBy("CdCliente", "NmCategoria")
      .groupByRaw("CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)")

      .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC");

    return qry;
  }

  async vendaMensalSchema(): Promise<Schema> {
    return [
      {
        field: "anoMes",
        name: "anoMes",
        label: "Mês",
        type: "string",
      },
      {
        field: "CdCliente",
        name: "cliente_id",
        label: "Cód. Cliente",
        type: "int",
      },
      {
        field: "NmCategoria",
        name: "NmCategoria",
        label: "Produto",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
      {
        field: "valor",
        name: "valor",
        label: "Valor",
        type: "float",
      },
    ];
  }

  async vendaAnaliticoSchema(): Promise<Schema> {
    return [
      {
        field: "NmCategoria",
        name: "NmCategoria",
        label: "Categoria",
        type: "string",
      },
      {
        field: "DtEmissao",
        name: "DtEmissao",
        label: "Emissão",
        type: "date",
      },
      {
        field: "NumNota",
        name: "NumNota",
        label: "Nota Fiscal",
        type: "string",
      },
      {
        field: "Serie",
        name: "Serie",
        label: "Série",
        type: "string",
      },
      {
        field: "Tipo",
        name: "Tipo",
        label: "Tipo",
        type: "string",
      },
      {
        field: "CdProduto",
        name: "CdProduto",
        label: "Cód Produto",
        type: "float",
      },
      {
        field: "Quantidade",
        name: "Quantidade",
        label: "Quantidade",
        type: "float",
      },
      {
        field: "VlTotal",
        name: "VlTotal",
        label: "Valor",
        type: "float",
      },
      {
        field: "Descricao",
        name: "Descricao",
        label: "Produto",
        type: "float",
      },
      {
        field: "CdVendedor",
        name: "CdVendedor",
        label: "Cód Vendedor",
        type: "int",
      },
      {
        field: "NmVendedor",
        name: "NmVendedor",
        label: "Vendedor",
        type: "string",
      },
      {
        field: "uf",
        name: "uf",
        label: "UF",
        type: "string",
      },
    ];
  }

  async vendaAnalitico({ inicio, fim }: { inicio: string; fim: string }) {
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
