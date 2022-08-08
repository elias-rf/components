import { Schema } from "@er/types";
import { validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type EsterilizacaoInternaRecord = {
  kLoteEstInt?: string;
  Data?: string;
  Resultado?: string;
  UsuarioResultado?: string;
  Obs?: string;
  Fechado?: string;
  UsuarioFechamento?: string;
  DataFechamento?: string;
  DataHoraAutoclave?: string;
};

export class EsterilizacaoInternaModel extends Model<EsterilizacaoInternaRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "esterilizacaoInterna",
      "tEsterilizacaoInterna",
      ["kLoteEstInt"]
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

  // SCHEMA MENSAL
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

  // SCHEMA PRODUTO
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
          type: "int",
        },
      ],
    };
  }

  // DIARIO
  async diario(inicio: string, fim: string) {
    // if (!inicio) throw new createError.BadRequest("Início não informado");
    // if (!fim) throw new createError.BadRequest("Fim não informado");
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
    const qry = await this._knex("tOperacaoOrdemProducao")
      .select(
        this._knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .whereBetween("DataInicio", [inicio, fim])
      .where(this._knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }

  // MENSAL
  async mensal(mes: string) {
    // if (!mes) throw new createError.BadRequest("Mês não informado");
    validator(mes, "mes", z.string());

    const qry = this._knex("tOperacaoOrdemProducao")
      .select(
        this._knex.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(this._knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .where(this._knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where(this._knex.raw("fkOperacao in (3058, 3158)"));

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
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this._knex.raw(
          "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        this._knex.raw(
          "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
        )
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .where(this._knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }

  // PRODUTO
  async produto(data: string) {
    // if (!data) throw new createError.BadRequest("Data não informada");
    validator(data, "data", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this._knex.raw(
          "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderBy("tbl_Produto.fkCategoria", "asc")
      .groupBy(["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"])
      .where({ DataInicio: data })
      .where(this._knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }
}
