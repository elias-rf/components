import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient, RawQuery } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import phonebookDal from "./phonebook";

describe("phonebook", () => {
  const knexDb = Knex({ client: MockClient });
  const phonebook = phonebookDal({ oftalmo: knexDb } as Connections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("deve listar", async () => {
    tracker.on.select("phonebook").response(["ok"]);
    expect(await phonebook.list({})).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select * from "phonebook" limit ?'
    );
  });

  test("deve ler", async () => {
    tracker.on.select("phonebook").response(["ok"]);

    expect(await phonebook.read({ id: ["1"] })).toEqual("ok");
    expect(tracker.history.select[0].bindings).toEqual(["1"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select * from "phonebook" where "id" = ?'
    );
  });

  test("deve excluir", async () => {
    tracker.on.delete("phonebook").response(["ok"]);

    const rsp = await phonebook.del(
      { id: ["1"] },
      { currentUser: { idGroup: "0" } }
    );
    expect(rsp).toEqual("ok");
  });

  test("deve criar", async () => {
    tracker.on
      .insert(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "insert" &&
          sql === 'insert into "phonebook" ("id") values (?)' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    expect(
      await phonebook.create(
        { rec: { id: "1" } },
        { currentUser: { idGroup: "0" } }
      )
    ).toEqual(["ok"]);
  });

  test("deve alterar", async () => {
    tracker.on
      .update(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "update" &&
          sql === 'update "phonebook" set "id" = ? where "id" = ?' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    expect(
      await phonebook.update(
        { id: ["1"], rec: { id: "1" } },
        { currentUser: { idGroup: "0" } }
      )
    ).toEqual(["ok"]);
  });
});
