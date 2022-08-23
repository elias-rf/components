import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse } from "./aux";

describe("cidade", () => {
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

  it("cidadeSchema", async () => {
    const rsp = await apiRequest(app, "cidadeSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        id: ["uf_old", "nome_cidade"],
        fields: expect.any(Array),
      })
    );
  });

  it("cidadeRead", async () => {
    tracker.on.select("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, "cidadeRead", {
      pk: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["ES", "Anchieta"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCidadeIBGE", "NmCidadeIBGE", "CdUFIBGE", "uf", "ufOld" from "cidadesERF" where "ufOld" = ? and "NmCidadeIBGE" = ?'
    );
  });

  it("cidadeList", async () => {
    tracker.on.select("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, "cidadeList", {
      where: [["uf_old", "=", "ES"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it("cidadeDel", async () => {
    tracker.on.delete("cidadesERF").response(1);
    const rsp = await apiRequest(app, "cidadeDel", {
      pk: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("cidadeCreate", async () => {
    tracker.on.any("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, "cidadeCreate", {
      data: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("cidadeUpdate", async () => {
    tracker.on.any("cidadesERF").response([recordFields]);
    const rsp = await apiRequest(app, "cidadeUpdate", {
      pk: { uf_old: "ES", nome_cidade: "Anchieta" },
      data: { uf_old: "ES", nome_cidade: "Anchieta" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });
});
