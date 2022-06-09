import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import ordemProducaoRpc from "./ordem-producao";

describe("venda", () => {
  const knexDb = Knex({ client: MockClient });
  const rpc = ordemProducaoRpc({
    oftalmo: knexDb,
  } as Connections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("getProdutoItem", async () => {
    tracker.on
      .select("tOrdemProducao")
      .response([{ fkProdutoItem: "2020-01" }]);

    const rsp = await rpc.getProdutoItem({
      id: ["202001"],
    });

    expect(rsp).toEqual("2020-01");
    expect(tracker.history.select[0].bindings).toEqual(["202001"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?'
    );
  });

  test("getProdutoPlano", async () => {
    tracker.on
      .select("tOrdemProducao")
      .response([{ fkProdutoItem: "2020-01" }]);

    tracker.on
      .select("tbl_produto_item")
      .response([{ fkProdutoItem: "2020-01" }]);

    const rsp = await rpc.getProdutoPlano({
      id: ["202001"],
    });

    expect(rsp).toEqual("2020-01");
    expect(tracker.history.select[0].bindings).toEqual(["202001"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?'
    );
    expect(tracker.history.select[1].sql).toEqual(
      'select "idVisiontech" from "tbl_produto_item" where "kprodutoitem" = ?'
    );
  });

  test("getProduto", async () => {
    tracker.on
      .select("tOrdemProducao")
      .response([{ fkProdutoItem: "2020-01" }]);

    tracker.on.select("tbl_produto_item").response([{ fkProduto: "2020-01" }]);

    const rsp = await rpc.getProduto({
      id: ["202001"],
    });

    expect(rsp).toEqual("2020-01");
    expect(tracker.history.select[0].bindings).toEqual(["202001"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?'
    );
    expect(tracker.history.select[1].sql).toEqual(
      'select "fkProduto" from "tbl_produto_item" where "kprodutoitem" = ?'
    );
  });

  test("getDataFabricacao", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dtini: "2020-01-01" }]);

    const rsp = await rpc.getDataFabricacao({
      id: ["202001"],
    });

    expect(rsp.toISOString()).toEqual("2020-01-01T03:00:00.000Z");
    expect(tracker.history.select[0].bindings).toEqual(["202001", "3059"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select max("dataInicio") as "dtini" from "tOperacaoOrdemProducao" where "fkOp" = ? and "fkOperacao" = ?'
    );
  });

  test("getDataValidade", async () => {
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ dtini: "2020-01-01" }]);

    const rsp = await rpc.getDataValidade({
      id: ["202001"],
    });

    expect(rsp.toISOString()).toEqual("2025-01-01T03:00:00.000Z");
    expect(tracker.history.select[0].bindings).toEqual(["202001", "3059"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select max("dataInicio") as "dtini" from "tOperacaoOrdemProducao" where "fkOp" = ? and "fkOperacao" = ?'
    );
  });

  test("getVersao", async () => {
    tracker.on.select("tOrdemProducao").response([{ versao: "2" }]);

    const rsp = await rpc.getVersao({
      id: ["202001"],
    });

    expect(rsp).toEqual("2");
    expect(tracker.history.select[0].bindings).toEqual(["202001"]);

    expect(tracker.history.select[0].sql).toEqual(
      'select "versao" from "tOrdemProducao" where "kOp" = ?'
    );
  });

  test("getControle", async () => {
    let rsp = rpc.getControle({
      id: ["18007600"],
      serie: "6",
    });
    expect(rsp).toEqual("180076000066");
  });

  test("isControleValido", async () => {
    let rsp = rpc.isControleValido({
      serie: "180076000066",
    });
    expect(rsp).toEqual(true);

    rsp = rpc.isControleValido({
      serie: "180076000067",
    });
    expect(rsp).toEqual(false);
  });
});
