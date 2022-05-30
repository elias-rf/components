import { test, it, describe, expect } from "vitest";
import * as esterilizacaoEsterna from "./esterilizacao-externa";
import Knex from "knex";
import { getTracker, MockClient, RawQuery } from "knex-mock-client";

test("diario", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql ===
          'select tEsterilizacaoexterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT\ttOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoexterna.Data between ? and ? group by "tEsterilizacaoexterna"."Data" order by "tEsterilizacaoexterna"."Data" desc' &&
        bindings.includes("2020-01-01") &&
        bindings.includes("2020-01-31")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoEsterna.diario(
    { inicio: "2020-01-01", fim: "2020-01-31" },
    { currentUser: { idGroup: "0" } },
    { knexDb }
  );

  expect(rsp).toEqual(["ok"]);
});

test("mensal", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql ===
          "select CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT\ttOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120)>=? group by CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) order by CONVERT(CHAR(7),tEsterilizacaoexterna.Data,120) desc" &&
        bindings.includes("2020-01")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoEsterna.mensal(
    { mes: "2020-01" },
    { currentUser: { idGroup: "0" } },
    { knexDb }
  );

  expect(rsp).toEqual(["ok"]);
});

test("modelo", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql ===
          `select isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [testerilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoexterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoexterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where "tEsterilizacaoexterna"."Data" = ? and IsNull([fkCategoria],'Metil')=? group by "NomeProdutoItem" order by "NomeProdutoItem" desc` &&
        bindings.includes("2020-01-01") &&
        bindings.includes("Metil")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoEsterna.modelo(
    { data: "2020-01-01", produto: "Metil" },
    { currentUser: { idGroup: "0" } },
    { knexDb }
  );

  expect(rsp).toEqual(["ok"]);
});
