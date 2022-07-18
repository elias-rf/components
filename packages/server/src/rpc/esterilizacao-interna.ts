import type { CurrentUser, RpcContext, Schema } from "@vt/types";
import { validator, z } from "@vt/utils";
import { Connections } from "dal/connections";

export interface EsterilizacaoInternaRpc {
  esterilizacaoInternaSchemaDiario: () => Schema;
  esterilizacaoInternaSchemaMensal: () => Schema;
  esterilizacaoInternaSchemaProduto: () => Schema;
  esterilizacaoInternaSchemaModelo: () => Schema;
  esterilizacaoInternaDiario: (
    args: { inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  esterilizacaoInternaMensal: (
    args: { mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  esterilizacaoInternaProduto: (
    args: { data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  esterilizacaoInternaModelo: (
    args: { data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function EsterilizacaoInterna(
  connections: Connections
): EsterilizacaoInternaRpc {
  const knexOftalmo = connections.oftalmo;
  return {
    // SCHEMA DIARIO
    esterilizacaoInternaSchemaDiario() {
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

    // SCHEMA MENSAL
    esterilizacaoInternaSchemaMensal() {
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
            type: "string",
          },
        ],
      };
    },

    // SCHEMA PRODUTO
    esterilizacaoInternaSchemaProduto() {
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

    // SCHEMA MODELO
    esterilizacaoInternaSchemaModelo() {
      return {
        pk: ["modelo"],
        fields: [
          {
            field: "modelo",
            label: "Modelo",
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

    // DIARIO
    async esterilizacaoInternaDiario(
      { inicio, fim }: { inicio: string; fim: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!inicio) throw new createError.BadRequest("Início não informado");
      // if (!fim) throw new createError.BadRequest("Fim não informado");
      validator(inicio, "inicio", z.string());
      validator(fim, "fim", z.string());
      const qry = await knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
        )
        .orderBy("DataInicio", "desc")
        .groupBy("DataInicio")
        .whereBetween("DataInicio", [inicio, fim])
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    // MENSAL
    async esterilizacaoInternaMensal(
      { mes }: { mes: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!mes) throw new createError.BadRequest("Mês não informado");
      validator(mes, "mes", z.string());

      const qry = knexOftalmo("tOperacaoOrdemProducao")
        .select(
          knexOftalmo.raw(
            "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
        .groupBy(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)"))
        .where(knexOftalmo.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));

      return qry;
    },

    // MODELO
    async esterilizacaoInternaModelo(
      {
        data,
        produto,
      }: {
        data: string;
        produto: string;
      },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      // if (!produto) throw new createError.BadRequest("Produto não informado");
      validator(data, "data", z.string());
      validator(produto, "produto", z.string());

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
          DataInicio: data,
          fkCategoria: produto,
        })
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },

    // PRODUTO
    async esterilizacaoInternaProduto(
      { data }: { data: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      validator(data, "data", z.string());

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
        .where({ DataInicio: data })
        .where(knexOftalmo.raw("fkOperacao in (3058, 3158)"));
      return qry;
    },
  };
}
