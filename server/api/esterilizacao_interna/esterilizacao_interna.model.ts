import { TConnections, TFieldClient } from "../../../types";
import { isString } from "../../../utils/identify/is-string";
import { validateIsThrow } from "../../lib/validate-is-throw";

export function esterilizacaoInternaModel(connections: TConnections) {
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
          name: "dia_semana",
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

    // SCHEMA MENSAL
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

    // SCHEMA PRODUTO
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
          type: "int",
        },
      ];
    },

    // DIARIO
    async diario({ inicio, fim }: { inicio: string; fim: string }) {
      validateIsThrow(isString(inicio), "inicio dever ser string");
      validateIsThrow(isString(fim), "fim dever ser string");
      const qry = await knex("tOperacaoOrdemProducao")
        .select(knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade"))
        .orderBy("DataInicio", "desc")
        .groupBy("DataInicio")
        .whereBetween("DataInicio", [inicio, fim])
        .where(knex.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    // MENSAL
    async mensal({ mes }: { mes: string }) {
      validateIsThrow(isString(mes), "mes dever ser string");

      const qry = knex("tOperacaoOrdemProducao")
        .select(
          knex.raw(
            "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
        .groupBy(knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
        .where(knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
        .where(knex.raw("fkOperacao in (3058, 3158)"));

      return qry;
    },

    // MODELO
    async modelo({ data, produto }: { data: string; produto: string }) {
      validateIsThrow(isString(data), "data dever ser string");
      validateIsThrow(isString(produto), "produto dever ser string");

      const qry = await knex(
        knex.raw(
          "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
        )
      )
        .select(
          knex.raw(
            "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .groupBy(
          knex.raw(
            "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
          )
        )
        .where({
          DataInicio: data,
          fkCategoria: produto,
        })
        .where(knex.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    // PRODUTO
    async produto({ data }: { data: string }) {
      validateIsThrow(isString(data), "produto dever ser string");

      const qry = await knex(
        knex.raw(
          "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
        )
      )
        .select(
          knex.raw(
            "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .orderBy("tbl_Produto.fkCategoria", "asc")
        .groupBy([
          "tbl_Produto.fkCategoria",
          "tOperacaoOrdemProducao.DataInicio",
        ])
        .where({ DataInicio: data })
        .where(knex.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },
  };
}
