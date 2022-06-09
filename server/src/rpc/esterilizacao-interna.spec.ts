import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient, RawQuery, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import esterilizacaoInternaRpc from "./esterilizacao-interna";

describe("esterilizacaoInterna", () => {
  const knexDb = Knex({ client: MockClient });
  const estInterna = esterilizacaoInternaRpc({
    oftalmo: knexDb,
  } as Connections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    tracker.on.select("tOperacaoOrdemProducao").response(["ok"]);

    const rsp = await estInterna.diario(
      { inicio: "2020-01-01", fim: "2020-01-31" },
      { currentUser: { idGroup: "0" } }
    );

    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([
      "2020-01-01",
      "2020-01-31",
    ]);
    expect(tracker.history.select[0].sql).toEqual(
      'select DataInicio as dia, Sum(QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where "DataInicio" between ? and ? and fkOperacao in (3058, 3158) group by "DataInicio" order by "DataInicio" desc'
    );
  });

  test("mensal", async () => {
    tracker.on.select("select").response(["ok"]);

    const rsp = await estInterna.mensal({ mes: "2020-01" });

    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual(["2020-01"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from "tOperacaoOrdemProducao" where CONVERT(CHAR(7),[DataInicio],120)>=? and fkOperacao in (3058, 3158) group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc'
    );
  });

  test("modelo", async () => {
    let tracker = getTracker();
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "select" &&
          sql ===
            'select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where "DataInicio" = ? and "fkCategoria" = ? and fkOperacao in (3058, 3158) group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria' &&
          bindings.includes("2020-01-01") &&
          bindings.includes("Metil")
        );
      })
      .response(["ok"]);

    const rsp = await estInterna.modelo(
      { data: "2020-01-01", produto: "Metil" },
      { currentUser: { idGroup: "0" } }
    );

    expect(rsp).toEqual(["ok"]);
  });
});
