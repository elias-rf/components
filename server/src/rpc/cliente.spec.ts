import { test, it, describe, expect, vi, beforeAll, afterEach } from "vitest";
import * as cliente from "./cliente";
import Knex from "knex";
import { getTracker, MockClient, RawQuery, Tracker } from "knex-mock-client";
import knexPlano from "../dal/plano.connection";

vi.mock("../dal/plano.connection", () => {
  return { default: Knex({ client: MockClient }) };
});

describe("Cliente", () => {
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("deve listar", async () => {
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "select" &&
          sql === 'select * from "cliente" limit ?' &&
          bindings.includes(50)
        );
      })
      .response(["ok"]);

    expect(await cliente.list({}, { currentUser: { idGroup: "0" } })).toEqual([
      "ok",
    ]);
  });

  test("deve ler", async () => {
    const knexDb = Knex({ client: MockClient });
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "select" &&
          sql === 'select * from "cliente" where "id" = ?' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    expect(
      await cliente.read({ id: ["1"] }, { currentUser: { idGroup: "0" } })
    ).toEqual("ok");
  });

  test("não deve ler se id errado", async () => {
    const knexDb = Knex({ client: MockClient });
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "select" &&
          sql === 'select * from "cliente" where "id" = ?' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    try {
      const rsp = cliente.read({ id: [] }, { currentUser: { idGroup: "0" } });
    } catch (error: any) {
      expect(error.message).toEqual("id is required");
    }
  });

  test("deve excluir", async () => {
    const knexDb = Knex({ client: MockClient });
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "delete" &&
          sql === 'delete from "cliente" where "id" = ?' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    const rsp = await cliente.del(
      { id: ["1"] },
      { currentUser: { idGroup: "0" } }
    );
    expect(rsp).toEqual("ok");
  });

  test("deve criar", async () => {
    const knexDb = Knex({ client: MockClient });
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "insert" &&
          sql === 'insert into "cliente" ("id") values (?)' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    expect(
      await cliente.create(
        { rec: { CdCliente: "1" } },
        { currentUser: { idGroup: "0" } }
      )
    ).toEqual(["ok"]);
  });

  test("deve alterar", async () => {
    const knexDb = Knex({ client: MockClient });
    tracker.on
      .any(({ method, sql, bindings }: RawQuery) => {
        return (
          method === "update" &&
          sql === 'update "cliente" set "id" = ? where "id" = ?' &&
          bindings.includes("1")
        );
      })
      .response(["ok"]);

    expect(
      await cliente.update(
        { id: ["1"], rec: { CdCliente: "1" } },
        { currentUser: { idGroup: "0" } }
      )
    ).toEqual(["ok"]);
  });
});
