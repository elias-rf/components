import { Schema } from "@er/types";
import { validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type OperacaoProducaoRecord = {
  kOperacao?: string;
  Operacao?: string;
};

export class OperacaoProducaoModel extends Model<OperacaoProducaoRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "operacaoProducao", "tOperacaoDeProducao", [
      "kOperacao",
    ]);
  }

  // DIARIO
  async diario(operacao: string, inicio: string, fim: string) {
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
    validator(operacao, "operacao", z.string());

    const qry = await this._knex("tOperacaoOrdemProducao")
      .select(
        this._knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .where({ fkOperacao: operacao })
      .whereBetween("DataInicio", [inicio, fim]);
    return qry;
  }

  // MENSAL
  async mensal(operacao: string, mes: string) {
    validator(mes, "mes", z.string());
    validator(operacao, "operacao", z.string());

    const qry = await this._knex("tOperacaoOrdemProducao")
      .select(
        this._knex.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(this._knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .having(this._knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where({ fkOperacao: operacao });
    return qry;
  }

  // MODELO
  async modelo(data: string, operacao: string, produto: string) {
    validator(data, "data", z.string());
    validator(produto, "produto", z.string());
    validator(operacao, "operacao", z.string());
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
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      });
    return qry;
  }

  // PRODUTO
  async produto(operacao: string, data: string) {
    validator(data, "data", z.string());
    validator(operacao, "operacao", z.string());

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
      .where({ fkOperacao: operacao, DataInicio: data });
    return qry;
  }

  // TURNO
  async turno(operacao: string, data: string) {
    validator(data, "data", z.string());
    validator(operacao, "operacao", z.string());

    const qry = await this._knex(
      this._knex.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this._knex.raw(
          "	case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        this._knex.raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
        )
      )
      .where({ fkOperacao: operacao, DataInicio: data });
    return qry;
  }

  async turnoSchema(): Promise<Schema> {
    return {
      pk: ["turno"],
      fields: [
        {
          field: "turno",
          label: "Mês",
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

  async produtoSchema(): Promise<Schema> {
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

  async mensalSchema(): Promise<Schema> {
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
          type: "int",
        },
      ],
    };
  }

  async diarioSchema(): Promise<Schema> {
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
}
