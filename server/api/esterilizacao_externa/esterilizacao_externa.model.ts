import { TConnections, TFieldClient } from "../../../types";
import { isString } from "../../../utils/identify/is-string";
import { validateIsThrow } from "../../lib/validate-is-throw";

export function esterilizacaoExternaModel(connections: TConnections) {
  const knex = connections.oftalmo;

  return {
    async schemaDiario(): Promise<TFieldClient[]> {
      return [
        {
          name: "dia",
          label: "Dia",
          type: "string",
          primaryKey: true,
        },
        {
          name: "diaSemana",
          label: "Dia Semana",
          type: "string",
        },
        {
          name: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ];
    },

    async schemaMensal(): Promise<TFieldClient[]> {
      return [
        {
          name: "mes",
          label: "Mês",
          type: "string",
          primaryKey: true,
        },
        {
          name: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ];
    },

    async schemaProduto(): Promise<TFieldClient[]> {
      return [
        {
          name: "produto",
          label: "Produto",
          type: "string",
          primaryKey: true,
        },
        {
          name: "quantidade",
          label: "Quantidade",
          type: "int",
        },
      ];
    },

    // SCHEMA MODELO
    async schemaModelo(): Promise<TFieldClient[]> {
      return [
        {
          name: "modelo",
          label: "Modelo",
          type: "string",
          primaryKey: true,
        },
        {
          name: "quantidade",
          label: "Quantidade",
          type: "string",
        },
      ];
    },

    async diario({ inicio, fim }: { inicio: string; fim: string }) {
      // validateIsThrow(isString(inicio), "inicio dever ser string");
      // validateIsThrow(isString(fim), "fim dever ser string");
      const qry = await knex(
        knex.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knex.raw(
            "tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("tEsterilizacaoexterna.Data", "desc")
        .groupBy("tEsterilizacaoexterna.Data")
        .where(
          knex.raw("tEsterilizacaoexterna.Data between ? and ?", [inicio, fim])
        );
      return qry;
    },

    // MENSAL
    async mensal({ mes }: { mes: string }) {
      // validateIsThrow(isString(mes), "mes dever ser string");

      const qry = await knex(
        knex.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knex.raw(
            "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc")
        .groupBy(knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)"))
        .where(
          knex.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=?", [mes])
        );
      return qry;
    },

    // MODELO
    async modelo({ data, produto }: { data: string; produto: string }) {
      // validateIsThrow(isString(data), "data dever ser string");
      // validateIsThrow(isString(produto), "produto dever ser string");

      const qry = await knex(
        knex.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knex.raw(
            "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("NomeProdutoItem", "desc")
        .groupBy("NomeProdutoItem")
        .where("tEsterilizacaoexterna.Data", data)
        .where(knex.raw("IsNull([fkCategoria],'Metil')=?", produto));

      return qry;
    },

    // PRODUTO
    async produto({ data }: { data: string }) {
      validateIsThrow(isString(data), "produto dever ser string");

      const qry = await knex(
        knex.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knex.raw(
            "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("fkCategoria", "desc")
        .groupBy("fkCategoria")
        .where(knex.raw("tEsterilizacaoexterna.Data=?", [data]));
      return qry;
    },
  };
}
