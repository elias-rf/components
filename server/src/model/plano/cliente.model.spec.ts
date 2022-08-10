import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { ClienteModel } from "./cliente.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const cliente = new ClienteModel({ plano: knexDb } as Connections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("lista sem argumentos", async () => {
    tracker.on.select("CadCli").response(["ok"]);
    const rsp = await cliente.list();
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    tracker.on.select("CadCli").response(["ok"]);
    const rsp = await cliente.list([["uf", "=", "SP"]]);
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where ("uf" = ?) limit ?'
    );
  });

  test("read", async () => {
    tracker.on.select("CadCli").response(["ok"]);
    const rsp = await cliente.read(["10"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.select[0].bindings).toEqual(["10"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where "CdCliente" = ?'
    );
  });

  test("del", async () => {
    tracker.on.delete("CadCli").response(["ok"]);
    const rsp = await cliente.del(["10"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.delete[0].bindings).toEqual(["10"]);
    expect(tracker.history.delete[0].sql).toEqual(
      'delete from "CadCli" where "CdCliente" = ?'
    );
  });

  test("create", async () => {
    tracker.on.insert("CadCli").response(["ok"]);
    const rsp = await cliente.create({ CdCliente: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.insert[0].bindings).toEqual(["10"]);
    expect(tracker.history.insert[0].sql).toEqual(
      'insert into "CadCli" ("CdCliente") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.update("CadCli").response(["ok"]);
    const rsp = await cliente.update(["10"], { CdCliente: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.update[0].bindings).toEqual(["10", "10"]);
    expect(tracker.history.update[0].sql).toEqual(
      'update "CadCli" set "CdCliente" = ? where "CdCliente" = ?'
    );
  });
});