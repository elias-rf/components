import { Connections } from "dal/connections";
import { CurrentUser, RpcContext, Schema } from "../../../types";
import { validator, z } from "../../../utils";

export interface OperacaoRpc {
  operacaoDiarioSchema: () => Schema;
  operacaoMensalSchema: () => Schema;
  operacaoProdutoSchema: () => Schema;
  operacaoTurnoSchema: () => Schema;
  operacaoDiario: (
    args: { operacao: string; inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  operacaoMensal: (
    args: { operacao: string; mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  operacaoProduto: (
    args: { operacao: string; data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  operacaoTurno: (
    args: { operacao: string; data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  operacaoModelo: (
    args: { operacao: string; data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function Operacao(connections: Connections): OperacaoRpc {
  const knexOftalmo = connections.oftalmo;
  return {
    // DIARIO
    async operacaoDiario(
      {
        operacao,
        inicio,
        fim,
      }: {
        operacao: string;
        inicio: string;
        fim: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!inicio) throw new createError.BadRequest("Início não informado");
      // if (!fim) throw new createError.BadRequest("Fim não informado");
      // if (!operacao) throw new createError.BadRequest("Operação não informada");
      validator(inicio, "inicio", z.string());
      validator(fim, "fim", z.string());
      validator(operacao, "operacao", z.string());

      const qry = await knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
        )
        .orderBy("DataInicio", "desc")
        .groupBy("DataInicio")
        .where({ fkOperacao: operacao })
        .whereBetween("DataInicio", [inicio, fim]);
      return qry;
    },

    // MENSAL
    async operacaoMensal(
      {
        operacao,
        mes,
      }: {
        operacao: string;
        mes: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!mes) throw new createError.BadRequest("Mês não informado");
      // if (!operacao) throw new createError.BadRequest("Operação não informada");
      validator(mes, "mes", z.string());
      validator(operacao, "operacao", z.string());

      const qry = await knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw(
            "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
        .groupBy(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)"))
        .having(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
        .where({ fkOperacao: operacao });
      return qry;
    },

    // MODELO
    async operacaoModelo(
      {
        data,
        operacao,
        produto,
      }: {
        data: string;
        operacao: string;
        produto: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      // if (!operacao) throw new createError.BadRequest("Operação não informada");
      // if (!produto) throw new createError.BadRequest("Produto não informado");
      validator(data, "data", z.string());
      validator(produto, "produto", z.string());
      validator(operacao, "operacao", z.string());
      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
        )
      )
        .select(
          knexOftalmo.raw(
            "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .groupBy(
          knexOftalmo.raw(
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
    async operacaoProduto(
      {
        operacao,
        data,
      }: {
        operacao: string;
        data: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      // if (!operacao) throw new createError.BadRequest("Operação não informada");
      validator(data, "data", z.string());
      validator(operacao, "operacao", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
        )
      )
        .select(
          knexOftalmo.raw(
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
    async operacaoTurno(
      {
        operacao,
        data,
      }: {
        operacao: string;
        data: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      // if (!operacao) throw new createError.BadRequest("Operação não informada");
      validator(data, "data", z.string());
      validator(operacao, "operacao", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
        )
      )
        .select(
          knexOftalmo.raw(
            "	case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .groupBy(
          knexOftalmo.raw(
            "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
          )
        )
        .where({ fkOperacao: operacao, DataInicio: data });
      return qry;
    },

    operacaoTurnoSchema() {
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
    },

    operacaoProdutoSchema() {
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
    },

    operacaoMensalSchema() {
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
    },
    operacaoDiarioSchema() {
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
    },
  };
}
