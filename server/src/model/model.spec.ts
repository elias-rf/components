import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Model } from "./model";

describe("model de acesso a dados", () => {
  const knexDb = Knex({ client: MockClient });
  const model = new Model(
    knexDb,
    "tabela",
    "Table",
    ["id1", "id2"],
    ["id", "field"]
  );
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("lista sem argumentos", async () => {
    tracker.on.select("Table").response(["ok"]);
    const rsp = await model.list();
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "field" from "Table" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    tracker.on.select("Table").response(["ok"]);
    const rsp = await model.list([["uf", "=", "SP"]]);
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "field" from "Table" where ("uf" = ?) limit ?'
    );
  });

  test("read", async () => {
    tracker.on.select("Table").response(["ok"]);
    const rsp = await model.read(["10", "11"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.select[0].bindings).toEqual(["10", "11"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "field" from "Table" where "id1" = ? and "id2" = ?'
    );
  });

  test("del", async () => {
    tracker.on.delete("Table").response(["ok"]);
    const rsp = await model.del(["10", "11"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.delete[0].bindings).toEqual(["10", "11"]);
    expect(tracker.history.delete[0].sql).toEqual(
      'delete from "Table" where "id1" = ? and "id2" = ?'
    );
  });

  test("create", async () => {
    tracker.on.insert("Table").response(["ok"]);
    const rsp = await model.create({ id: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.insert[0].bindings).toEqual(["10"]);
    expect(tracker.history.insert[0].sql).toEqual(
      'insert into "Table" ("id") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.update("Table").response(["ok"]);
    const rsp = await model.update(["10", "11"], { id: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.update[0].bindings).toEqual(["10", "10", "11"]);
    expect(tracker.history.update[0].sql).toEqual(
      'update "Table" set "id" = ? where "id1" = ? and "id2" = ?'
    );
  });
});
