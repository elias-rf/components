import { test, it, describe, expect } from "vitest";
import * as phonebook from "./phonebook";
import Knex from "knex";
import { getTracker, MockClient, RawQuery } from "knex-mock-client";

test("deve listar", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql === 'select * from "phonebook" limit ?' &&
        bindings.includes(50)
      );
    })
    .response(["ok"]);

  expect(
    await phonebook.list({}, { currentUser: { idGroup: "0" } }, { knexDb })
  ).toEqual(["ok"]);
  tracker.reset();
});

test("deve ler", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql === 'select * from "phonebook" where "id" = ?' &&
        bindings.includes("1")
      );
    })
    .response(["ok"]);

  expect(
    await phonebook.read(
      { id: ["1"] },
      { currentUser: { idGroup: "0" } },
      { knexDb }
    )
  ).toEqual("ok");
  tracker.reset();
});

test("não deve ler se id errado", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "select" &&
        sql === 'select * from "phonebook" where "id" = ?' &&
        bindings.includes("1")
      );
    })
    .response(["ok"]);

  try {
    const rsp = phonebook.read(
      { id: [] },
      { currentUser: { idGroup: "0" } },
      { knexDb }
    );
  } catch (error: any) {
    expect(error.message).toEqual("id is required");
  }

  tracker.reset();
});

test("deve excluir", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
      return (
        method === "delete" &&
        sql === 'delete from "phonebook" where "id" = ?' &&
        bindings.includes("1")
      );
    })
    .response(["ok"]);

  const rsp = await phonebook.del(
    { id: ["1"] },
    { currentUser: { idGroup: "0" } },
    { knexDb }
  );
  expect(rsp).toEqual("ok");
  tracker.reset();
});

test("deve criar", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
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
      { currentUser: { idGroup: "0" } },
      { knexDb }
    )
  ).toEqual(["ok"]);
});

test("deve alterar", async () => {
  const knexDb = Knex({ client: MockClient });
  let tracker = getTracker();
  tracker.on
    .any(({ method, sql, bindings }: RawQuery) => {
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
      { currentUser: { idGroup: "0" } },
      { knexDb }
    )
  ).toEqual(["ok"]);
});
