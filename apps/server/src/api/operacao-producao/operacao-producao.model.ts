import { Schema } from "@er/types";

import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class OperacaoProducaoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "operacao_producao");
  }

  // DIARIO
  async diario(operacao: string, inicio: string, fim: string) {
    const qry = await this.knex("tOperacaoOrdemProducao")
      .select(
        this.knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .where({ fkOperacao: operacao })
      .whereBetween("DataInicio", [inicio, fim]);
    return qry;
  }

  // MENSAL
  async mensal(operacao: string, mes: string) {
    const qry = await this.knex("tOperacaoOrdemProducao")
      .select(
        this.knex.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(this.knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .having(this.knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where({ fkOperacao: operacao });
    return qry;
  }

  // MODELO
  async modelo(data: string, operacao: string, produto: string) {
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
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      });
    return qry;
  }

  // PRODUTO
  async produto(operacao: string, data: string) {
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
      .where({ fkOperacao: operacao, DataInicio: data });
    return qry;
  }

  // TURNO
  async turno(operacao: string, data: string) {
    const qry = await this.knex(
      this.knex.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this.knex.raw(
          "	case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        this.knex.raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
        )
      )
      .where({ fkOperacao: operacao, DataInicio: data });
    return qry;
  }

  async turnoSchema(): Promise<Schema> {
    return [
      {
        field: "turno",
        name: "Mês",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "int",
      },
    ];
  }

  async produtoSchema(): Promise<Schema> {
    return [
      {
        field: "produto",
        name: "Produto",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "int",
      },
    ];
  }

  async mensalSchema(): Promise<Schema> {
    return [
      {
        field: "mes",
        name: "Mês",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "int",
      },
    ];
  }

  async diarioSchema(): Promise<Schema> {
    return [
      {
        field: "dia",
        name: "Dia",
        type: "string",
      },
      {
        field: "diaSemana",
        name: "Dia Semana",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "string",
      },
    ];
  }
}
