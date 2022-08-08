import { Id, Schema } from "@er/types";
import { idSchema, validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { Connections } from "../../dal/connections";
import { NfSaidaFvModel } from "../fullvision/nf-saida.model";
import { Model } from "../model";

export type NfSaidaRecord = {
  CdFilial?: number;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  DtEmissao?: string;
  DtSaida?: string;
  Tipo?: string;
  CdCliente?: string;
  CdVendedor?: string;
  FgEstatistica?: string;
  FgEstoque?: string;
  VlTotal?: number;
  VlProdutos?: number;
  VlFrete?: number;
  NumPedido?: number;
  Nop?: number;
};

export type VendasRecord = {
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

export class NfSaidaModel extends Model<NfSaidaRecord> {
  nfSaidaFvModel: NfSaidaFvModel;
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfSaida",
      "MestreNota",
      ["CdFilial", "NumNota", "Serie", "Modelo"],
      [
        "CdFilial",
        "NumNota",
        "Serie",
        "Modelo",
        "DtEmissao",
        "DtSaida",
        "Tipo",
        "CdCliente",
        "CdVendedor",
        "FgEstatistica",
        "FgEstoque",
        "VlTotal",
        "VlProdutos",
        "VlFrete",
        "NumPedido",
        "Nop",
      ]
    );
    this.nfSaidaFvModel = new NfSaidaFvModel(connections);
  }

  // DIARIO
  async transferenciaDiario(inicio: string, fim: string) {
    // if (!inicio) throw new createError.BadRequest("Início não informado");
    // if (!fim) throw new createError.BadRequest("Fim não informado");
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
    const aux: any = {};
    const rsp = [];
    const qry = await this._knex(
      this._knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this._knex.raw(
          "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("[mestrenota].[DtEmissao] desc")
      .groupByRaw("[mestrenota].[DtEmissao], CategPro.NmCategoria")
      .where(
        this._knex.raw("[mestrenota].[DtEmissao] between ? and ?", [
          inicio,
          fim,
        ])
      )
      .andWhere(
        this._knex.raw(
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
    return {
      pk: ["dia"],
      fields: [
        {
          field: "dia",
          label: "Dia",
          labelClass: "text-center",
          fieldClass: "text-left",
          type: "string",
        },
        {
          field: "LITEFLEX",
          label: "LiteFlex",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "HILITE",
          label: "HiLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ENLITE",
          label: "EnLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "METILCELULOSE",
          label: "Metil",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "CORNEAL RING",
          label: "Corneal Ring",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ANEL CAPSULAR",
          label: "Anel Capsular",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
      ],
    };
  }

  // MENSAL
  async transferenciaMensal(mes: string) {
    // if (!mes) throw new createError.BadRequest("Mês não informado");
    validator(mes, "mes", z.string());

    const aux: any = {};
    const rsp = [];
    const qry = await this._knex(
      this._knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this._knex.raw(
          "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc")
      .groupBy(
        this._knex.raw(
          "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria"
        )
      )
      .where(
        this._knex.raw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=?", [
          mes,
        ])
      )
      .andWhere(
        this._knex.raw(
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
  async transferenciaModelo(data: string) {
    // if (!data) throw new createError.BadRequest("Data não informada");

    validator(data, "data", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
      )
    )
      .select(
        this._knex.raw(
          "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
        )
      )
      .orderByRaw("CadPro.Descricao asc")
      .groupBy(this._knex.raw("CadPro.Descricao"))
      .where(this._knex.raw("MestreNota.DtEmissao = ?", [data]))
      .andWhere(
        this._knex.raw(
          "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
        )
      );

    return qry;
  }

  // SCHEMA MODELO
  async transferenciaModeloSchema(): Promise<Schema> {
    return {
      pk: ["modelo"],
      fields: [
        {
          field: "modelo",
          label: "Modelo",
          labelClass: "text-center",
          fieldClass: "text-left",
          type: "string",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
      ],
    };
  }

  // SCHEMA MENSAL
  async transferenciaMensalSchema(): Promise<Schema> {
    return {
      pk: ["mes"],
      fields: [
        {
          field: "mes",
          label: "Mês",
          labelClass: "text-center",
          fieldClass: "text-left",
          type: "string",
        },
        {
          field: "LITEFLEX",
          label: "LiteFlex",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "HILITE",
          label: "HiLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ENLITE",
          label: "EnLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "METILCELULOSE",
          label: "Metil",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "CORNEAL RING",
          label: "Corneal Ring",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ANEL CAPSULAR",
          label: "Anel Capsular",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
      ],
    };
  }

  // DIARIO
  async vendaDiario(inicio: string, fim: string, uf: string[]) {
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
    validator(uf, "uf", z.string().array());

    const qry = this._knex(
      this._knex.raw(
        "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF"
      )
    )
      .select([
        "NmCategoria",
        "MestreNota.DtEmissao",
        this._knex.raw(
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
    return {
      pk: ["NmCategoria", "DtEmissao"],
      fields: [
        {
          field: "DtEmissao",
          label: "Dia",
          type: "string",
        },
        {
          field: "NmCategoria",
          label: "Produto",
          type: "string",
        },
        {
          field: "qtd",
          label: "Quantidade",
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
  async vendaMensal(inicio: string, fim: string, id: Id) {
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
    validator(id, "id", idSchema);

    const qry = this._knex(
      this._knex.raw("MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro")
    )
      .select([
        "CategPro.NmCategoria",
        "MestreNota.CdCliente",
        this._knex.raw(
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

  async vendaMensalSchema(): Promise<Schema> {
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

  async vendaAnaliticoSchema(): Promise<Schema> {
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
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());

    const qryPlano = this._knex("MestreNota")
      .select(this._knex.raw("'VT' as origem"))
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

    const resp: VendasRecord[][] = await Promise.all([qryPlano, qryFullvision]);
    return resp[0].concat(resp[1]);
  }
}
