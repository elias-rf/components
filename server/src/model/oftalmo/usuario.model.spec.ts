import { Connections } from "dal/connections";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { UsuarioModel } from "./usuario.model";

describe("rpc de autenticação", () => {
  const knexDb = Knex<any, any[]>({ client: MockClient });
  const usuario = new UsuarioModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as Connections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("possui schema", async () => {
    const rsp = await usuario.schema();
    expect(rsp).toHaveProperty("pk");
    expect(rsp).toHaveProperty("fields");
  });

  test("lista sem argumentos", async () => {
    tracker.on.select("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.list();
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual([50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kUsuario", "NomeUsuario", "hash", "idGroup", "nome", "Ativo" from "Tbl_Seguranca_Usuario" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    tracker.on.select("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.list([["uf", "=", "SP"]]);
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kUsuario", "NomeUsuario", "hash", "idGroup", "nome", "Ativo" from "Tbl_Seguranca_Usuario" where ("uf" = ?) limit ?'
    );
  });

  test("read", async () => {
    tracker.on.select("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.read(["10"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.select[0].bindings).toEqual(["10"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kUsuario", "NomeUsuario", "hash", "idGroup", "nome", "Ativo" from "Tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("del", async () => {
    tracker.on.delete("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.del(["10"]);
    expect(rsp).toEqual("ok");
    expect(tracker.history.delete[0].bindings).toEqual(["10"]);
    expect(tracker.history.delete[0].sql).toEqual(
      'delete from "Tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("create", async () => {
    tracker.on.insert("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.create({ kUsuario: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.insert[0].bindings).toEqual(["10"]);
    expect(tracker.history.insert[0].sql).toEqual(
      'insert into "Tbl_Seguranca_Usuario" ("kUsuario") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.update("Tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.update(["10"], { kUsuario: "10" });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.update[0].bindings).toEqual(["10", "10"]);
    expect(tracker.history.update[0].sql).toEqual(
      'update "Tbl_Seguranca_Usuario" set "kUsuario" = ? where "kUsuario" = ?'
    );
  });
});
