import { knexMockHistory } from "@er/utils/src/knex-mock-history";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { TConnections } from "../../dal/connections";
import { ClienteModel } from "./cliente.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const cliente = new ClienteModel({ plano: knexDb } as TConnections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
    tracker.on.select("CadCli").response(["ok"]);
    tracker.on.delete("CadCli").response(1);
    tracker.on.insert("CadCli").response(["ok"]);
    tracker.on.update("CadCli").response(["ok"]);
  });

  afterEach(() => {
    tracker.reset();
  });

  test("lista sem argumentos", async () => {
    const rsp = await cliente.list();
    expect(rsp).toEqual(["ok"]);

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: [50],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" limit ?',
        },
      ],
    });
  });

  test("lista com argumentos", async () => {
    const rsp = await cliente.list({ where: [["uf", "=", "SP"]] });
    expect(rsp).toEqual(["ok"]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["SP", 50],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where ("Uf" = ?) limit ?',
        },
      ],
    });
  });

  test("read", async () => {
    const rsp = await cliente.read({ id: { cliente_id: "10" } });
    expect(rsp).toEqual("ok");

    expect(knexMockHistory(tracker)).toEqual({
      select: [
        {
          bindings: ["10"],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where "CdCliente" = ?',
        },
      ],
    });
  });

  test("del", async () => {
    const rsp = await cliente.del({ id: { cliente_id: "10" } });
    expect(rsp).toEqual(1);

    expect(knexMockHistory(tracker)).toEqual({
      delete: [
        {
          bindings: ["10"],
          sql: 'delete from "CadCli" where "CdCliente" = ?',
        },
      ],
    });
  });

  test("create", async () => {
    const rsp = await cliente.create({ data: { cliente_id: 10 } });
    expect(rsp).toEqual("ok");

    expect(knexMockHistory(tracker)).toEqual({
      insert: [
        {
          bindings: [10],
          sql: 'insert into "CadCli" ("CdCliente") values (?)',
        },
      ],
    });
  });

  test("update", async () => {
    const rsp = await cliente.update({
      id: { cliente_id: "10" },
      data: { cliente_id: 10 },
    });
    expect(rsp).toEqual("ok");

    expect(knexMockHistory(tracker)).toEqual({
      update: [
        {
          bindings: [10, 10],
          sql: 'update "CadCli" set "CdCliente" = ? where "CdCliente" = ?',
        },
      ],
    });
  });
});
