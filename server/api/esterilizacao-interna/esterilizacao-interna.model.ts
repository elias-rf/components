import { TConnections } from "../../../types";
import { TEsterilizacaoInternaRpc } from "../../../types/esterilizacao-interna.type";
import { isString } from "../../../utils/identify/is-string";
import { validateIsThrow } from "../../lib/validate-is-throw";
import { crudModel } from "../crud/crud.model";

const table = "esterilizacao_interna";

export function esterilizacaoInternaModel(
  connections: TConnections
): TEsterilizacaoInternaRpc {
  const knex = connections.oftalmo;
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
      async schemaDiario() {
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
            type: "int",
          },
        ];
      },

      // SCHEMA MENSAL
      async schemaMensal() {
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
            type: "int",
          },
        ];
      },

      // SCHEMA PRODUTO
      async schemaProduto() {
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
      async schemaModelo() {
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
      async diario({ inicio, fim }) {
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
      async modelo({ data, produto }) {
        // validateIsThrow(isString(data), "data dever ser string");
        // validateIsThrow(isString(produto), "produto dever ser string");

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
    },
    mutation: {
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
}
