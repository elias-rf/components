import { TConnections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { ClienteModel } from "./cliente.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const cliente = new ClienteModel({ plano: knexDb } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("lista sem argumentos", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.list();
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.any[0].bindings).toEqual([50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.list({ where: [["uf", "=", "SP"]] });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.any[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where ("Uf" = ?) limit ?'
    );
  });

  test("read", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.read({ id: { cliente_id: "10" } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where "CdCliente" = ?'
    );
  });

  test("del", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.del({ id: { cliente_id: "10" } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'delete from "CadCli" where "CdCliente" = ?'
    );
  });

  test("create", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.create({ data: { cliente_id: "10" } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'insert into "CadCli" ("CdCliente") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.any("CadCli").response(["ok"]);
    const rsp = await cliente.update({
      id: { cliente_id: "10" },
      data: { cliente_id: "10" },
    });
    expect(rsp).toEqual("ok");
    expect(tracker.history.any[0].bindings).toEqual(["10", "10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'update "CadCli" set "CdCliente" = ? where "CdCliente" = ?'
    );
  });
});
