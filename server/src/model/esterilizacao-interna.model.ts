import { Schema } from "@er/types";
import { validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type EsterilizacaoInternaRecord = {
  esterilizacao_interna_id?: string;
  data_envio?: string;
  is_fechado?: string;
  resultado?: string;
  usuario_id_resultado?: string;
  observacao?: string;
  data_fechamento?: string;
  usuario_id_fechamento?: string;
  data_autoclave?: string;
};

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

export class EsterilizacaoInternaModel extends EntityModel<EsterilizacaoInternaRecord> {
  constructor(connections: TConnections) {
    super(connections, "esterilizacao_interna");
  }

  async schemaDiario(): Promise<Schema> {
    return {
      fields: [
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
      ],
    };
  }

  // SCHEMA MENSAL
  async schemaMensal(): Promise<Schema> {
    return {
      fields: [
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
      ],
    };
  }

  // SCHEMA PRODUTO
  async schemaProduto(): Promise<Schema> {
    return {
      fields: [
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
      ],
    };
  }

  // SCHEMA MODELO
  async schemaModelo(): Promise<Schema> {
    return {
      fields: [
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
      ],
    };
  }

  // DIARIO
  async diario(inicio: string, fim: string) {
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());
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
    validator(mes, "mes", z.string());

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
    validator(data, "data", z.string());
    validator(produto, "produto", z.string());

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
    validator(data, "data", z.string());

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
