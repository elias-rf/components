import type { RpcContext, Schema } from "@vt/types";
import { validator, z } from "@vt/utils";
import { Connections } from "../dal/connections";

export interface EsterilizacaoExternaRpc {
  esterilizacaoExternaSchemaDiario: () => Schema;
  esterilizacaoExternaSchemaMensal: () => Schema;
  esterilizacaoExternaSchemaProduto: () => Schema;
  esterilizacaoExternaSchemaModelo: () => Schema;
  esterilizacaoExternaDiario: (
    args: { inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  esterilizacaoExternaMensal: (
    args: { mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  esterilizacaoExternaProduto: (
    args: { data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  esterilizacaoExternaModelo: (
    args: { data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function EsterilizacaoExterna(
  connections: Connections
): EsterilizacaoExternaRpc {
  const knexOftalmo = connections.oftalmo;
  return {
    // SCHEMA DIARIO
    esterilizacaoExternaSchemaDiario(): Schema {
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
    esterilizacaoExternaSchemaMensal(): Schema {
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
    esterilizacaoExternaSchemaProduto(): Schema {
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
    esterilizacaoExternaSchemaModelo(): Schema {
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
            type: "string",
          },
        ],
      };
    },

    // DIARIO
    async esterilizacaoExternaDiario(
      { inicio, fim }: { inicio: string; fim: string },
      ctx?: RpcContext
    ) {
      // if (!inicio) throw new createError.BadRequest("Início não informado");
      // if (!fim) throw new createError.BadRequest("Fim não informado");
      validator(inicio, "inicio", z.string());
      validator(fim, "fim", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knexOftalmo.raw(
            "tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("tEsterilizacaoexterna.Data", "desc")
        .groupBy("tEsterilizacaoexterna.Data")
        .where(
          knexOftalmo.raw("tEsterilizacaoexterna.Data between ? and ?", [
            inicio,
            fim,
          ])
        );
      return qry;
    },

    // MENSAL
    async esterilizacaoExternaMensal(
      { mes }: { mes: string },
      ctx?: RpcContext
    ) {
      // if (!mes) throw new createError.BadRequest("Mês não informado");
      validator(mes, "mes", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT	tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knexOftalmo.raw(
            "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc")
        .groupBy(
          knexOftalmo.raw("CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)")
        )
        .where(
          knexOftalmo.raw(
            "CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=?",
            [mes]
          )
        );
      return qry;
    },

    // MODELO
    async esterilizacaoExternaModelo(
      {
        data,
        produto,
      }: {
        data: string;
        produto: string;
      },
      ctx?: RpcContext
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      // if (!produto) throw new createError.BadRequest("Produto não informado");
      validator(data, "data", z.string());
      validator(produto, "produto", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knexOftalmo.raw(
            "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("NomeProdutoItem", "desc")
        .groupBy("NomeProdutoItem")
        .where("tEsterilizacaoexterna.Data", data)
        .where(knexOftalmo.raw("IsNull([fkCategoria],'Metil')=?", produto));

      return qry;
    },

    // PRODUTO
    async esterilizacaoExternaProduto(
      { data }: { data: string },
      ctx?: RpcContext
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");
      validator(data, "data", z.string());

      const qry = await knexOftalmo(
        knexOftalmo.raw(
          "tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
        )
      )
        .select(
          knexOftalmo.raw(
            "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
          )
        )
        .orderBy("fkCategoria", "desc")
        .groupBy("fkCategoria")
        .where(knexOftalmo.raw("tEsterilizacaoexterna.Data=?", [data]));
      return qry;
    },
  };
}
