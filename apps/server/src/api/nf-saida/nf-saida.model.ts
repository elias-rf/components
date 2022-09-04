import { Schema } from "@er/types";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { NfSaidaFvModel } from "../nf-saida-fv/nf-saida-fv.model";

export type TVendas = {
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

export class NfSaidaModel extends Entity {
  nfSaidaFvModel: NfSaidaFvModel;
  constructor(connections: TConnections) {
    super(connections, "nf_saida");
    this.nfSaidaFvModel = new NfSaidaFvModel(connections);
  }

  // DIARIO
  async transferenciaDiario({ inicio, fim }: { inicio: string; fim: string }) {
    // validateIsThrow(isString(inicio), "inicio dever ser string");
    // validateIsThrow(isString(fim), "fim dever ser string");
    const aux: any = {};
    const rsp = [];
    const qry = await this.knex(
      this.knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this.knex.raw(
          "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("[mestrenota].[DtEmissao] desc")
      .groupByRaw("[mestrenota].[DtEmissao], CategPro.NmCategoria")
      .where(
        this.knex.raw("[mestrenota].[DtEmissao] between ? and ?", [inicio, fim])
      )
      .andWhere(
        this.knex.raw(
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
  }

  // SCHEMA DIARIO
  async transferenciaDiarioSchema(): Promise<Schema> {
    return [
      {
        field: "dia",
        name: "Dia",
        labelClass: "text-center",
        fieldClass: "text-left",
        type: "string",
      },
      {
        field: "LITEFLEX",
        name: "LiteFlex",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "HILITE",
        name: "HiLite",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "ENLITE",
        name: "EnLite",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "METILCELULOSE",
        name: "Metil",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "CORNEAL RING",
        name: "Corneal Ring",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "ANEL CAPSULAR",
        name: "Anel Capsular",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
    ];
  }

  // MENSAL
  async transferenciaMensal({ mes }: { mes: string }) {
    // validateIsThrow(isString(mes), "mes dever ser string");

    const aux: any = {};
    const rsp = [];
    const qry = await this.knex(
      this.knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this.knex.raw(
          "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc")
      .groupBy(
        this.knex.raw(
          "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria"
        )
      )
      .where(
        this.knex.raw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=?", [mes])
      )
      .andWhere(
        this.knex.raw(
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
  }

  // MODELO
  async transferenciaModelo({ data }: { data: string }) {
    // validateIsThrow(isString(data), "data dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this.knex.raw(
          "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CadPro.Descricao asc")
      .groupBy(this.knex.raw("CadPro.Descricao"))
      .where(this.knex.raw("MestreNota.DtEmissao = ?", [data]))
      .andWhere(
        this.knex.raw(
          "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
        )
      );

    return qry;
  }

  // SCHEMA MODELO
  async transferenciaModeloSchema(): Promise<Schema> {
    return [
      {
        field: "modelo",
        name: "Modelo",
        labelClass: "text-center",
        fieldClass: "text-left",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
    ];
  }

  // SCHEMA MENSAL
  async transferenciaMensalSchema(): Promise<Schema> {
    return [
      {
        field: "mes",
        name: "Mês",
        labelClass: "text-center",
        fieldClass: "text-left",
        type: "string",
      },
      {
        field: "LITEFLEX",
        name: "LiteFlex",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "HILITE",
        name: "HiLite",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "ENLITE",
        name: "EnLite",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "METILCELULOSE",
        name: "Metil",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "CORNEAL RING",
        name: "Corneal Ring",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
      {
        field: "ANEL CAPSULAR",
        name: "Anel Capsular",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
    ];
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
    // validateIsThrow(isString(inicio), "inicio dever ser string");
    // validateIsThrow(isString(fim), "fim dever ser string");
    // validateIsThrow(isNonEmptyArray(fim), "UF dever ser array de string");

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
        name: "Valor",
        type: "float",
      },
    ];
  }

  // MENSAL
  async vendaMensal({
    inicio,
    fim,
    cliente,
  }: {
    inicio: string;
    fim: string;
    cliente: number;
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
      .where({ "MestreNota.CdCliente": cliente })
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
        name: "Mês",
        type: "string",
      },
      {
        field: "CdCliente",
        name: "Cód. Cliente",
        type: "int",
      },
      {
        field: "NmCategoria",
        name: "Produto",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "int",
      },
      {
        field: "valor",
        name: "Valor",
        type: "float",
      },
    ];
  }

  async vendaAnaliticoSchema(): Promise<Schema> {
    return [
      {
        field: "NmCategoria",
        name: "Categoria",
        type: "string",
      },
      {
        field: "DtEmissao",
        name: "Emissão",
        type: "date",
      },
      {
        field: "NumNota",
        name: "Nota Fiscal",
        type: "string",
      },
      {
        field: "Serie",
        name: "Série",
        type: "string",
      },
      {
        field: "Tipo",
        name: "Tipo",
        type: "string",
      },
      {
        field: "CdProduto",
        name: "Cód Produto",
        type: "float",
      },
      {
        field: "Quantidade",
        name: "Quantidade",
        type: "float",
      },
      {
        field: "VlTotal",
        name: "Valor",
        type: "float",
      },
      {
        field: "Descricao",
        name: "Produto",
        type: "float",
      },
      {
        field: "CdVendedor",
        name: "Cód Vendedor",
        type: "int",
      },
      {
        field: "NmVendedor",
        name: "Vendedor",
        type: "string",
      },
      {
        field: "uf",
        name: "UF",
        type: "string",
      },
    ];
  }

  async vendaAnalitico({ inicio, fim }: { inicio: string; fim: string }) {
    const qryPlano = this.knex("MestreNota")
      .select(this.knex.raw("'VT' as origem"))
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
        "MestreNota.CdFilial": 2,
        "CadVen.FgControle": "S",
        "MestreNota.FgEstatistica": "S",
        "CadPro.FgEstatistica": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .where("ItemNota.Sequencia", "<>", 0)
      .where("mestrenota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereIn("MestreNota.Tipo", ["E", "S"]);

    const qryFullvision = this.nfSaidaFvModel.vendaAnalitico(inicio, fim);

    const resp: TVendas[][] = await Promise.all([qryPlano, qryFullvision]);
    return resp[0].concat(resp[1]);
  }
}
