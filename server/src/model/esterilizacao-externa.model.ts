import { Schema } from "@er/types";
import { validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TEsterilizacaoExterna = {
  esterilizacao_externa_id?: string;
  data_envio?: string;
  data_retorno?: string;
  quantidade?: string;
  quantidade_caixa?: string;
  is_fechado?: string;
  resultado?: string;
  usuario_id?: string;
  observacao?: string;
  lote?: string;
};

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

export class EsterilizacaoExternaModel extends EntityModel<TEsterilizacaoExterna> {
  constructor(connections: TConnections) {
    super(connections, "esterilizacao_externa");
  }

  async schemaDiario(): Promise<Schema> {
    return {
      fields: [
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
      ],
    };
  }

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
          name: "Modelo",
          type: "string",
        },
        {
          field: "quantidade",
          name: "Quantidade",
          type: "string",
        },
      ],
    };
  }

  async diario(inicio: string, fim: string) {
    validator(inicio, "inicio", z.string());
    validator(fim, "fim", z.string());

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
  async mensal(mes: string) {
    validator(mes, "mes", z.string());

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
  async modelo(data: string, produto: string) {
    validator(data, "data", z.string());
    validator(produto, "produto", z.string());

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
  async produto(data: string) {
    validator(data, "data", z.string());

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
