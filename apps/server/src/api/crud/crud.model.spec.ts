import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { CrudModel } from "./crud.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const crud = new CrudModel({
    plano: knexDb,
    oftalmo: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("lista sem argumentos", async () => {
    const rsp = await crud.list({
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", -10]],
    });
    expect(rsp).toEqual([{ agenda_telefone_id: 171 }]);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10, 50],
          sql: 'select "id", "name", "department", "email" from "phonebook" where ("id" = ?) limit ?',
        },
      ],
    });
  });

  it("lista com argumentos", async () => {
    const rsp = await crud.list({
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", -10]],
    });
    expect(rsp).toEqual([{ agenda_telefone_id: 171 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10, 50],
          sql: 'select "id", "name", "department", "email" from "phonebook" where ("id" = ?) limit ?',
        },
      ],
    });
  });

  it("read", async () => {
    const rsp = await crud.read({
      table: "agenda_telefone",
      id: { agenda_telefone_id: -10 },
    });
    expect(rsp).toEqual({ agenda_telefone_id: 171 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10],
          sql: 'select "id", "name", "department", "email" from "phonebook" where "id" = ?',
        },
      ],
    });
  });

  it("del", async () => {
    const rsp = await crud.del({
      table: "agenda_telefone",
      id: { agenda_telefone_id: "10" },
    });
    expect(rsp).toEqual(1);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'delete from "phonebook" where "id" = ?',
        },
      ],
    });
  });

  it("create", async () => {
    const rsp = await crud.create({
      table: "agenda_telefone",
      data: { agenda_telefone_id: -10 },
    });
    expect(rsp).toEqual({ agenda_telefone_id: 171 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10],
          sql: 'insert into "phonebook" ("id") values (?)',
        },
      ],
    });
  });

  it("clienteUpdate no params", async () => {
    // @ts-expect-error teste para ausencia de parametros
    await expect(crud.update({ table: "agenda_telefone" })).rejects.toThrow(
      "Id deve ser informado"
    );
  });

  it("update", async () => {
    const rsp = await crud.update({
      table: "agenda_telefone",
      id: { agenda_telefone_id: "10" },
      data: { agenda_telefone_id: 10 },
    });
    expect(rsp).toEqual({ agenda_telefone_id: 172 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10, "10"],
          sql: 'update "phonebook" set "id" = ? where "id" = ?',
        },
      ],
    });
  });
});
