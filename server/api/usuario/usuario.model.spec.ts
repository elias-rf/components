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
import { knexMockHistory } from "../../../utils/knex-mock-history";
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
    expect(rsp).toEqual([
      {
        group_id: "dev",
        usuario_id: 1,
        nome: "Fulano",
        nome_login: "fulano",
        hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [50],
          sql: 'select "kUsuario", "NomeUsuario", "email", "fkFuncionario", "Ativo", "hash", "nome", "setor", "nivel", "idGroup" from "tbl_Seguranca_Usuario" limit ?',
        },
      ],
    });
  });

  test("lista com argumentos", async () => {
    const rsp = await usuario.list({
      where: [["usuario_id", "=", "SP"]],
      select: ["usuario_id"],
    });
    expect(rsp).toEqual([
      {
        group_id: "dev",
        usuario_id: 1,
        nome: "Fulano",
        nome_login: "fulano",
        hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["SP", 50],
          sql: 'select "kUsuario" from "tbl_Seguranca_Usuario" where ("kUsuario" = ?) limit ?',
        },
      ],
    });
  });

  test("read", async () => {
    const rsp = await usuario.read({
      id: { usuario_id: "10" },
      select: ["usuario_id"],
    });
    expect(rsp).toEqual({
      group_id: "dev",
      usuario_id: 1,
      nome: "Fulano",
      nome_login: "fulano",
      hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'select "kUsuario" from "tbl_Seguranca_Usuario" where "kUsuario" = ?',
        },
      ],
    });
  });

  test("del", async () => {
    const rsp = await usuario.del({ id: { usuario_id: "10" } });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'delete from "tbl_Seguranca_Usuario" where "kUsuario" = ?',
        },
      ],
    });
  });

  test("create", async () => {
    const rsp = await usuario.create({ data: { usuario_id: 10 } });
    expect(rsp).toEqual({
      group_id: "dev",
      usuario_id: 1,
      nome: "Fulano",
      nome_login: "fulano",
      hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10],
          sql: 'insert into "tbl_Seguranca_Usuario" ("kUsuario") values (?)',
        },
      ],
    });
  });

  test("update", async () => {
    const rsp = await usuario.update({
      id: { usuario_id: "10" },
      data: { usuario_id: 10 },
    });
    expect(rsp).toEqual({ usuario_id: 2 });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10, "10"],
          sql: 'update "tbl_Seguranca_Usuario" set "kUsuario" = ? where "kUsuario" = ?',
        },
      ],
    });
  });

  test("listSubject", async () => {
    const rsp = await usuario.listSubject({
      id: { usuario_id: "10" },
      select: ["subject_id"],
    });
    expect(rsp).toEqual([
      {
        subject_id: "form",
        group_id: "dev",
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'select "idGroup" from "tbl_Seguranca_Usuario" where "kUsuario" = ?',
        },
        {
          bindings: [
            {
              group_id: "dev",
              usuario_id: 1,
              nome: "Fulano",
              nome_login: "fulano",
              hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            },
            50,
          ],
          sql: 'select "idSubject" from "groupSubject" where ("idGroup" = ?) limit ?',
        },
      ],
    });
  });
});
