import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import { TConnections } from "../../dal/connections";
import { UsuarioModel } from "./usuario.model";

describe("rpc de autenticação", () => {
  const knexDb = Knex({ client: MockClient });
  const usuario = new UsuarioModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("possui schema", async () => {
    const rsp = await usuario.schema();
    expect(Array.isArray(rsp)).toBeTruthy();
  });

  test("lista sem argumentos", async () => {
    tracker.on.any("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.list();
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.any[0].bindings).toEqual([50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "kUsuario", "NomeUsuario", "fkGrupo", "email", "fkFuncionario", "Ativo", "hash", "nome", "setor", "nivel", "idGroup" from "tbl_Seguranca_Usuario" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    tracker.on.select("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.list({
      where: [["usuario_id", "=", "SP"]],
      select: ["usuario_id"],
    });
    expect(rsp).toEqual(["ok"]);
    expect(tracker.history.select[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kUsuario" from "tbl_Seguranca_Usuario" where ("kUsuario" = ?) limit ?'
    );
  });

  test("read", async () => {
    tracker.on.select("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.read({
      id: { usuario_id: "10" },
      select: ["usuario_id"],
    });
    expect(rsp).toEqual("ok");
    expect(tracker.history.select[0].bindings).toEqual(["10"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "kUsuario" from "tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("del", async () => {
    tracker.on.delete("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.del({ id: { usuario_id: "10" } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.delete[0].bindings).toEqual(["10"]);
    expect(tracker.history.delete[0].sql).toEqual(
      'delete from "tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("create", async () => {
    tracker.on.insert("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.create({ data: { usuario_id: 10 } });
    expect(rsp).toEqual("ok");
    expect(tracker.history.insert[0].bindings).toEqual([10]);
    expect(tracker.history.insert[0].sql).toEqual(
      'insert into "tbl_Seguranca_Usuario" ("kUsuario") values (?)'
    );
  });

  test("update", async () => {
    tracker.on.update("tbl_Seguranca_Usuario").response(["ok"]);
    const rsp = await usuario.update({
      id: { usuario_id: "10" },
      data: { usuario_id: 10 },
    });
    expect(rsp).toEqual("ok");
    expect(tracker.history.update[0].bindings).toEqual([10, "10"]);
    expect(tracker.history.update[0].sql).toEqual(
      'update "tbl_Seguranca_Usuario" set "kUsuario" = ? where "kUsuario" = ?'
    );
  });
});
