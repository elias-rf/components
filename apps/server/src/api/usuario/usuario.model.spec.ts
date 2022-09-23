import Knex from "knex";
import { getTracker, MockClient } from "knex-mock-client";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  test,
} from "vitest";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { UsuarioModel } from "./usuario.model";

describe("rpc de autenticação", () => {
  const knexDb = Knex({ client: MockClient });
  const usuario = new UsuarioModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: ReturnType<typeof getTracker>;

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

  it("possui schema", async () => {
    const rsp = await usuario.schema();
    expect(Array.isArray(rsp)).toBeTruthy();
  });

  test("lista sem argumentos", async () => {
    const rsp = await usuario.list();
    expect(rsp).toEqual([{ group_id: "dev", usuario_id: 1 }]);
    expect(tracker.history.any[0].bindings).toEqual([50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "kUsuario", "NomeUsuario", "email", "fkFuncionario", "Ativo", "hash", "nome", "setor", "nivel", "idGroup" from "tbl_Seguranca_Usuario" limit ?'
    );
  });

  test("lista com argumentos", async () => {
    const rsp = await usuario.list({
      where: [["usuario_id", "=", "SP"]],
      select: ["usuario_id"],
    });
    expect(rsp).toEqual([{ group_id: "dev", usuario_id: 1 }]);
    expect(tracker.history.any[0].bindings).toEqual(["SP", 50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "kUsuario" from "tbl_Seguranca_Usuario" where ("kUsuario" = ?) limit ?'
    );
  });

  test("read", async () => {
    const rsp = await usuario.read({
      id: { usuario_id: "10" },
      select: ["usuario_id"],
    });
    expect(rsp).toEqual({ group_id: "dev", usuario_id: 1 });
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "kUsuario" from "tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("del", async () => {
    const rsp = await usuario.del({ id: { usuario_id: "10" } });
    expect(rsp).toEqual(1);
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'delete from "tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });

  test("create", async () => {
    const rsp = await usuario.create({ data: { usuario_id: 10 } });
    expect(rsp).toEqual({ group_id: "dev", usuario_id: 1 });
    expect(tracker.history.any[0].bindings).toEqual([10]);
    expect(tracker.history.any[0].sql).toEqual(
      'insert into "tbl_Seguranca_Usuario" ("kUsuario") values (?)'
    );
  });

  test("update", async () => {
    const rsp = await usuario.update({
      id: { usuario_id: "10" },
      data: { usuario_id: 10 },
    });
    expect(rsp).toEqual({ usuario_id: 2 });
    expect(tracker.history.any[0].bindings).toEqual([10, "10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'update "tbl_Seguranca_Usuario" set "kUsuario" = ? where "kUsuario" = ?'
    );
  });

  test("listSubject", async () => {
    const rsp = await usuario.listSubject({
      id: { usuario_id: "10" },
      select: ["subject_id"],
    });
    expect(rsp).toEqual([{ subject_id: "form", group_id: "dev" }]);
    expect(tracker.history.any[0].bindings).toEqual(["10"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "idGroup" from "tbl_Seguranca_Usuario" where "kUsuario" = ?'
    );
  });
});
