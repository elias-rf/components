import { test, it, describe, expect } from "vitest";
import * as esterilizacaoInterna from "./esterilizacao-interna";
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
          'select DataInicio as dia, Sum(QtdConforme) AS qtdConforme from "tOperacaoOrdemProducao" where "DataInicio" between ? and ? and fkOperacao in (3058, 3158) group by "DataInicio" order by "DataInicio" desc' &&
        bindings.includes("2020-01-01") &&
        bindings.includes("2020-01-31")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoInterna.diario(
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
          'select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS qtdConforme from "tOperacaoOrdemProducao" where CONVERT(CHAR(7),[DataInicio],120)>=? and fkOperacao in (3058, 3158) group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc' &&
        bindings.includes("2020-01")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoInterna.mensal(
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
          'select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS qtdConforme from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "DataInicio" = ? and "fkCategoria" = ? and fkOperacao in (3058, 3158) group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria' &&
        bindings.includes("2020-01-01") &&
        bindings.includes("Metil")
      );
    })
    .response(["ok"]);

  const rsp = await esterilizacaoInterna.modelo(
    { data: "2020-01-01", produto: "Metil" },
    { currentUser: { idGroup: "0" } },
    { knexDb }
  );

  expect(rsp).toEqual(["ok"]);
});
