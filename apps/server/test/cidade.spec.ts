import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse } from "./aux";

const NAME = "cidade";

describe(NAME, () => {
  let tracker: Tracker;
  vi.mock("../src/dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));
  const recordNames = {
    uf_old: "ES",
    nome_cidade: "Anchieta",
    uf: "ES",
  };
  const recordFields = {
    ufOld: "ES",
    NmCidadeIBGE: "Anchieta",
    uf: "ES",
  };

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it(`${NAME}Schema`, async () => {
    const rsp = await apiRequest(app, "cidadeSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it(`${NAME}Read`, async () => {
    tracker.on.select("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, `${NAME}Read`, {
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["ES", "Anchieta"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCidadeIBGE", "NmCidadeIBGE", "CdUFIBGE", "uf", "ufOld" from "cidadesERF" where "ufOld" = ? and "NmCidadeIBGE" = ?'
    );
  });

  it(`${NAME}List`, async () => {
    tracker.on.select("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, `${NAME}List`, {
      where: [["uf_old", "=", "ES"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it(`${NAME}Del`, async () => {
    tracker.on.delete("cidadesERF").response(1);
    const rsp = await apiRequest(app, `${NAME}Del`, {
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it(`${NAME}Create`, async () => {
    tracker.on.insert("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, `${NAME}Create`, {
      data: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it(`${NAME}Update`, async () => {
    tracker.on.update("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, `${NAME}Update`, {
      id: { uf_old: "ES", nome_cidade: "Anchieta" },
      data: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });
});
