import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { knexMockHistory } from "../../utils/knex-mock-history";
import { app } from "../app";
import { setTracker } from "../lib/set-tracker";
import { apiRequest, rpcResponse } from "./aux";

describe("authentication", () => {
  let tracker: Tracker;
  vi.mock("../dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));
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

  it("login", async () => {
    // tracker.on.select("Usuario").response([
    //   {
    //     Ativo: 1,
    //     hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    //     kUsuario: 1,
    //     nome: "Fulano",
    //     NomeUsuario: "fulano",
    //     idGroup: "dev",
    //   },
    // ]);
    const rsp = await apiRequest(app, "login", {
      user: "fulano",
      password: "123",
    });

    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        nome_login: "fulano",
        group_id: "dev",
        nome: "Fulano",
        usuario_id: 1,
        token: expect.any(String),
      })
    );

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["fulano", 50],
          sql: 'select "kUsuario", "NomeUsuario", "email", "fkFuncionario", "Ativo", "hash", "nome", "setor", "nivel", "idGroup" from "tbl_Seguranca_Usuario" where ("NomeUsuario" = ?) limit ?',
        },
      ],
    });
  });
});
