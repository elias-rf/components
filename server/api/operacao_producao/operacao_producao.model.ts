import { TConnections, TFieldClient } from "../../../types";

export function operacaoProducaoModel(connections: TConnections) {
  // super(connections, "operacao_producao");
  const knex = connections.oftalmo;
  return {
    // DIARIO
    async diario({
      operacao,
      inicio,
      fim,
    }: {
      operacao: string;
      inicio: string;
      fim: string;
    }) {
      const qry = await knex("tOperacaoOrdemProducao")
        .select(knex.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade"))
        .orderBy("DataInicio", "desc")
        .groupBy("DataInicio")
        .where({ fkOperacao: operacao })
        .whereBetween("DataInicio", [inicio, fim]);
      return qry;
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
    async produto({ operacao, data }: { operacao: string; data: string }) {
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
        .where({ fkOperacao: operacao, DataInicio: data });
      return qry;
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
  };
}
