import { Schema } from "@er/types";
import { isString } from "@er/utils/src/is-string";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { TEsterilizacaoExterna } from "./esterilizacao-externa.type";

export type TEsterilizacaoExternaDia = {
  dia: string;
  dia_semana: string;
  quantidade: string;
};

export type TEsterilizacaoExternaMes = {
  mes: string;
  quantidade: string;
};

export type TEsterilizacaoExternaProduto = {
  produto: string;
  quantidade: string;
};

export type TEsterilizacaoExternaModelo = {
  modelo: string;
  quantidade: string;
};

export class EsterilizacaoExternaModel extends Entity<TEsterilizacaoExterna> {
  constructor(connections: TConnections) {
    super(connections, "esterilizacao_externa");
  }

  async schemaDiario(): Promise<Schema> {
    return [
      {
        field: "dia",
        label: "Dia",
        name: "Dia",
        type: "string",
      },
      {
        field: "diaSemana",
        label: "dia_semana",
        name: "Dia Semana",
        type: "string",
      },
      {
        field: "quantidade",
        label: "Quantidade",
        name: "quantidade",
        type: "string",
      },
    ];
  }

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
        name: "Modelo",
        type: "string",
      },
      {
        field: "quantidade",
        name: "Quantidade",
        type: "string",
      },
    ];
  }

  async diario({ inicio, fim }: { inicio: string; fim: string }) {
    // validateIsThrow(isString(inicio), "inicio dever ser string");
    // validateIsThrow(isString(fim), "fim dever ser string");
    const qry = await this.knex(
      this.knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.knex.raw(
          "tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("tEsterilizacaoexterna.Data", "desc")
      .groupBy("tEsterilizacaoexterna.Data")
      .where(
        this.knex.raw("tEsterilizacaoexterna.Data between ? and ?", [
          inicio,
          fim,
        ])
      );
    return qry;
  }

  // MENSAL
  async mensal({ mes }: { mes: string }) {
    // validateIsThrow(isString(mes), "mes dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.knex.raw(
          "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc")
      .groupBy(this.knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)"))
      .where(
        this.knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=?", [
          mes,
        ])
      );
    return qry;
  }

  // MODELO
  async modelo({ data, produto }: { data: string; produto: string }) {
    // validateIsThrow(isString(data), "data dever ser string");
    // validateIsThrow(isString(produto), "produto dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.knex.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("NomeProdutoItem", "desc")
      .groupBy("NomeProdutoItem")
      .where("tEsterilizacaoexterna.Data", data)
      .where(this.knex.raw("IsNull([fkCategoria],'Metil')=?", produto));

    return qry;
  }

  // PRODUTO
  async produto({ data }: { data: string }) {
    validateIsThrow(isString(data), "produto dever ser string");

    const qry = await this.knex(
      this.knex.raw(
        "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.knex.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(this.knex.raw("tEsterilizacaoexterna.Data=?", [data]));
    return qry;
  }
}