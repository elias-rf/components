import { Schema } from "@er/types";
import { isString } from "@er/utils/src/is-string";

import { TConnections } from "../dal/connections";
import { validateIsThrow } from "../lib/validate-is-throw";
import { TEsterilizacaoInterna } from "../type/esterilizacao-interna.type";
import { Entity } from "./entity";

export type TEsterilizacaoInternaDia = {
  dia: string;
  dia_semana: string;
  quantidade: string;
};

export type TEsterilizacaoInternaMes = {
  mes: string;
  quantidade: string;
};

export type TEsterilizacaoInternaProduto = {
  produto: string;
  quantidade: string;
};

export type TEsterilizacaoInternaModelo = {
  modelo: string;
  quantidade: string;
};

export class EsterilizacaoInternaModel extends Entity<TEsterilizacaoInterna> {
  constructor(connections: TConnections) {
    super(connections, "esterilizacao_interna");
  }

  async schemaDiario(): Promise<Schema> {
    return [
      {
        field: "dia",
        name: "dia",
        label: "Dia",
        type: "string",
      },
      {
        field: "diaSemana",
        name: "dia_semana",
        label: "Dia Semana",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "string",
      },
    ];
  }

  // SCHEMA MENSAL
  async schemaMensal(): Promise<Schema> {
    return [
      {
        field: "mes",
        name: "mes",
        label: "Mês",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "string",
      },
    ];
  }

  // SCHEMA PRODUTO
  async schemaProduto(): Promise<Schema> {
    return [
      {
        field: "produto",
        name: "produto",
        label: "Produto",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ];
  }

  // SCHEMA MODELO
  async schemaModelo(): Promise<Schema> {
    return [
      {
        field: "modelo",
        name: "modelo",
        label: "Modelo",
        type: "string",
      },
      {
        field: "quantidade",
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ];
  }

  // DIARIO
  async diario(inicio: string, fim: string) {
    validateIsThrow(isString(inicio), "inicio dever ser string");
    validateIsThrow(isString(fim), "fim dever ser string");
    const qry = await this.knex("tOperacaoOrdemProducao")
      .select(
        this.knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .whereBetween("DataInicio", [inicio, fim])
      .where(this.knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }

  // MENSAL
  async mensal(mes: string) {
    validateIsThrow(isString(mes), "mes dever ser string");

    const qry = this.knex("tOperacaoOrdemProducao")
      .select(
        this.knex.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(this.knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .where(this.knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where(this.knex.raw("fkOperacao in (3058, 3158)"));

    return qry;
  }

  // MODELO
  async modelo(data: string, produto: string) {
    validateIsThrow(isString(data), "data dever ser string");
    validateIsThrow(isString(produto), "produto dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this.knex.raw(
          "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        this.knex.raw(
          "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
        )
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .where(this.knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }

  // PRODUTO
  async produto(data: string) {
    validateIsThrow(isString(data), "produto dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this.knex.raw(
          "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderBy("tbl_Produto.fkCategoria", "asc")
      .groupBy(["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"])
      .where({ DataInicio: data })
      .where(this.knex.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }
}
