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
import { TConnections } from "../../../types";
import { knexMockHistory } from "../../../utils/data/knex-mock-history";
import { setTracker } from "../../lib/set_tracker";
import { usuarioModel } from "./usuario.model";

describe("rpc de autenticação", () => {
  const knexDb = Knex({ client: MockClient });
  const usuario = usuarioModel({
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
