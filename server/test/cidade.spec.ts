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
import { knexMockHistory } from "../../utils/data/knex_mock_history";
import { app } from "../app";
import { setTracker } from "../lib/set_tracker";
import { apiRequest, rpcResponse } from "./aux";

describe("cidade", () => {
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

  it(`cidadeSchema`, async () => {
    const rsp = await apiRequest(app, "crudSchema", { table: "cidade" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it(`cidadeRead`, async () => {
    const rsp = await apiRequest(app, `crudRead`, {
      table: "cidade",
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
      select: ["uf_old"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        uf_old: "ES",
      })
    );

    expect(tracker.history.any[0].bindings).toEqual(["ES", "Anchieta"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "ufOld" from "cidadesERF" where "ufOld" = ? and "NmCidadeIBGE" = ?'
    );
  });

  it(`cidadeList`, async () => {
    const rsp = await apiRequest(app, `crudList`, {
      table: "cidade",
      where: [["uf_old", "=", "ES"]],
      select: ["uf_old"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse([
        {
          uf_old: "ES",
        },
      ])
    );
  });

  it(`cidadeDel`, async () => {
    const rsp = await apiRequest(app, `crudDel`, {
      table: "cidade",
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it(`cidadeCreate`, async () => {
    const rsp = await apiRequest(app, `crudCreate`, {
      table: "cidade",
      data: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        uf_old: "ES",
      })
    );
  });

  it(`cidadeUpdate`, async () => {
    const rsp = await apiRequest(app, `crudUpdate`, {
      table: "cidade",
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
      data: { uf_old: "MG" },
    });
    expect(rsp.status).toEqual(200);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["MG", "ES", "Anchieta"],
          sql: 'update "cidadesERF" set "ufOld" = ? where "ufOld" = ? and "NmCidadeIBGE" = ?',
        },
      ],
    });
  });
});
