import { Schema } from "@er/types";
import { validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type EsterilizacaoExternaRecord = {
  kLoteEstExt?: string;
  Data?: string;
  DataRetorno?: string;
  Quantidade?: string;
  QtdCaixa?: string;
  Fechado?: string;
  Resultado?: string;
  UsuarioResultado?: string;
  Obs?: string;
  LoteEto?: string;
};

export class EsterilizacaoExternaModel extends Model<EsterilizacaoExternaRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "esterilizacaoExterna",
      "tEsterilizacaoExterna",
      ["kLoteEstExt"]
    );
  }

  async schemaDiario(): Promise<Schema> {
    return {
      pk: ["dia"],
      fields: [
        {
          field: "dia",
          label: "Dia",
          type: "ID",
        },
        {
          field: "diaSemana",
          label: "Dia Semana",
          type: "string",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ],
    };
  }

  async schemaMensal(): Promise<Schema> {
    return {
      pk: ["mes"],
      fields: [
        {
          field: "mes",
          label: "Mês",
          type: "ID",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ],
    };
  }

  async schemaProduto(): Promise<Schema> {
    return {
      pk: ["produto"],
      fields: [
        {
          field: "produto",
          label: "Produto",
          type: "ID",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "int",
        },
      ],
    };
  }

  // SCHEMA MODELO
  async schemaModelo(): Promise<Schema> {
    return {
      pk: ["modelo"],
      fields: [
        {
          field: "modelo",
          label: "Modelo",
          type: "ID",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ],
    };
  }

  async diario(inicio: string, fim: string) {
    // if (!inicio) throw new createError.BadRequest("Início não informado");
    // if (!fim) throw new createError.BadRequest("Fim não informado");
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this._knex.raw(
          "tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("tEsterilizacaoexterna.Data", "desc")
      .groupBy("tEsterilizacaoexterna.Data")
      .where(
        this._knex.raw("tEsterilizacaoexterna.Data between ? and ?", [
          inicio,
          fim,
        ])
      );
    return qry;
  }

  // MENSAL
  async mensal(mes: string) {
    // if (!mes) throw new createError.BadRequest("Mês não informado");
    validator(mes, "mes", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this._knex.raw(
          "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc")
      .groupBy(
        this._knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)")
      )
      .where(
        this._knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=?", [
          mes,
        ])
      );
    return qry;
  }

  // MODELO
  async modelo(data: string, produto: string) {
    // if (!data) throw new createError.BadRequest("Data não informada");
    // if (!produto) throw new createError.BadRequest("Produto não informado");
    validator(data, "data", z.string());
    validator(produto, "produto", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this._knex.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("NomeProdutoItem", "desc")
      .groupBy("NomeProdutoItem")
      .where("tEsterilizacaoexterna.Data", data)
      .where(this._knex.raw("IsNull([fkCategoria],'Metil')=?", produto));

    return qry;
  }

  // PRODUTO
  async produto(data: string) {
    // if (!data) throw new createError.BadRequest("Data não informada");
    validator(data, "data", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this._knex.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(this._knex.raw("tEsterilizacaoexterna.Data=?", [data]));
    return qry;
  }
}
