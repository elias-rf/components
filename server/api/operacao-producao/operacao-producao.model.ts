import { TConnections, TFieldClient } from "../../../types";
import { TOperacaoProducaoRpc } from "../../../types/operacao-producao.type";
import { crudModel } from "../crud/crud.model";

const table = "operacao_producao";

export function operacaoProducaoModel(
  connections: TConnections
): TOperacaoProducaoRpc {
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
      // DIARIO
      async diario({ operacao, inicio, fim }) {
        const qry = await knex<
          any,
          {
            dia: string;
            diaSemana: string;
            quantidade: number;
          }
        >("tOperacaoOrdemProducao")
          .select(knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade"))
          .orderBy("DataInicio", "desc")
          .groupBy("DataInicio")
          .where({ fkOperacao: operacao })
          .whereBetween("DataInicio", [inicio, fim]);
        return qry as { dia: string; diaSemana: string; quantidade: number }[];
      },

      // MENSAL
      async mensal({ operacao, mes }: { operacao: string; mes: string }) {
        const qry = await knex("tOperacaoOrdemProducao")
          .select(
            knex.raw(
              "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
            )
          )
          .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
          .groupBy(knex.raw("CONVERT(CHAR(7),[DataInicio],120)"))
          .having(knex.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
          .where({ fkOperacao: operacao });
        return qry;
      },

      // MODELO
      async modelo({
        data,
        operacao,
        produto,
      }: {
        data: string;
        operacao: string;
        produto: string;
      }) {
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
            fkOperacao: operacao,
            DataInicio: data,
            fkCategoria: produto,
          });
        return qry;
      },

      // PRODUTO
      async produto({ operacao, data }) {
        const qry = await knex<any, { produto: string; quantidade: number }[]>(
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
          .where({ fkOperacao: operacao, DataInicio: data });
        return qry as { produto: string; quantidade: number }[];
      },

      // TURNO
      async turno({ operacao, data }: { operacao: string; data: string }) {
        const qry = await knex(
          knex.raw(
            "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
          )
        )
          .select(
            knex.raw(
              "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
            )
          )
          .groupBy(
            knex.raw(
              "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
            )
          )
          .where({ fkOperacao: operacao, DataInicio: data });
        return qry;
      },

      async turnoSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "turno",
            label: "Turno",
            primaryKey: true,
            type: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ];
      },

      async produtoSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "produto",
            label: "Produto",
            primaryKey: true,
            type: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ];
      },

      async mensalSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "mes",
            label: "Mês",
            primaryKey: true,
            type: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            type: "int",
          },
        ];
      },

      async diarioSchema(): Promise<TFieldClient[]> {
        return [
          {
            name: "dia",
            label: "Dia",
            primaryKey: true,
            type: "string",
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
