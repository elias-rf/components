import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { TConnections } from "../../dal/connections";
import { OrdemProducaoModel } from "./ordem-producao.model";

describe("ordemProducaoModel", () => {
  const knexDb = Knex({ client: MockClient });
  const ordemProducao = new OrdemProducaoModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("lista com argumentos", async () => {
    tracker.on.any("tOrdemProducao").response(["ok"]);
    const rsp = await ordemProducao.list({
      where: [["ordem_producao_id", "=", "1"]],
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.any[0].bindings).toEqual(["1", 50]);
    expect(tracker.history.any[0].sql).toEqual(
      `select "kOp" from "tOrdemProducao" where ("kOp" = ?) limit ?`
    );
  });

  test("read", async () => {
    tracker.on.any("tOrdemProducao").response(["ok"]);
    const rsp = await ordemProducao.read({
      id: { ordem_producao_id: "10" },
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "kOp" from "tOrdemProducao" where "kOp" = ?'
    );
  });

  test("del", async () => {
    tracker.on.any("tOrdemProducao").response(["ok"]);
    const rsp = await ordemProducao.del({ id: { ordem_producao_id: 10 } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual([10]);
    expect(tracker.history.any[0].sql).toEqual(
      'delete from "tOrdemProducao" where "kOp" = ?'
    );
  });

  test("create", async () => {
    tracker.on.any("tOrdemProducao").response(["ok"]);
    const rsp = await ordemProducao.create({ data: { ordem_producao_id: 10 } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual([10]);
    expect(tracker.history.any[0].sql).toEqual(
      'insert into "tOrdemProducao" ("kOp") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.any("tOrdemProducao").response(["ok"]);
    const rsp = await ordemProducao.update({
      id: { ordem_producao_id: 10 },
      data: { ordem_producao_id: 10 },
    });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual([10, 10]);
    expect(tracker.history.any[0].sql).toEqual(
      'update "tOrdemProducao" set "kOp" = ? where "kOp" = ?'
    );
  });
});
