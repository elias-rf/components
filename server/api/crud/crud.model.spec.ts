import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { crudModel } from "./crud.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const crud = crudModel({
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

  it("lista com table errada", async () => {
    await expect(
      crud.list({
        table: "lixo",
      })
    ).rejects.toThrow("lixo não é uma entidade cadastrada no schema");
  });
  it("lista com order errada", async () => {
    await expect(
      crud.list({
        table: "agenda_telefone",
        order: [
          ["1", "desc"],
          ["2", "desc"],
        ],
      })
    ).rejects.toThrow(
      "1 não é um campo válido para [order][phonebook]: agenda_telefone_id,nome,setor,email"
    );
  });

  it("lista com where errada", async () => {
    await expect(
      crud.list({
        table: "agenda_telefone",
        order: [["agenda_telefone_id", "desc"]],
        where: [
          ["1", "=", 1],
          ["2", "=", 2],
        ],
      })
    ).rejects.toThrow(
      "1 não é um campo válido para [where][phonebook]: agenda_telefone_id,nome,setor,email"
    );
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

  it("decrement", async () => {
    const rsp = await crud.decrement({
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", -10]],
      decrement: { agenda_telefone_id: 2 },
    });
    expect(rsp).toEqual([{ agenda_telefone_id: 172 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [2, -10],
          sql: 'update "phonebook" set "id" = "id" - ? where ("id" = ?)',
        },
      ],
    });
  });

  it("increment", async () => {
    const rsp = await crud.increment({
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", -10]],
      increment: { agenda_telefone_id: 2 },
    });
    expect(rsp).toEqual([{ agenda_telefone_id: 172 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [2, -10],
          sql: 'update "phonebook" set "id" = "id" + ? where ("id" = ?)',
        },
      ],
    });
  });

  it("count", async () => {
    const rsp = await crud.count({
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", -10]],
    });
    expect(rsp).toEqual([{ id: 171 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10],
          sql: 'select count(*) as "count" from "phonebook" where ("id" = ?)',
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

  it("clear", async () => {
    const rsp = await crud.clear({
      table: "agenda_telefone",
    });
    expect(rsp).toEqual({
      agenda_telefone_id: 0,
      email: null,
      nome: "",
      setor: null,
    });
  });
  it("nameList", async () => {
    const rsp = await crud.nameList({
      table: "agenda_telefone",
    });
    expect(rsp).toEqual(["agenda_telefone_id", "nome", "setor", "email"]);
  });
});
