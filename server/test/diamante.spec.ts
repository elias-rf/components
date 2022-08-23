import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse } from "./aux";

describe("diamante", () => {
  let tracker: Tracker;
  vi.mock("../src/dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));
  const recordNames = {
    diamante_id: "A",
    diamante: "B",
    tipo: "C",
  };
  const recordFields = {
    id: "A",
    diamante: "B",
    tipo: "C",
  };

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it("diamanteSchema", async () => {
    const rsp = await apiRequest(app, "diamanteSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        id: ["diamante_id"],
        fields: expect.any(Array),
      })
    );
  });

  it("diamanteRead", async () => {
    tracker.on.select("diamante").response([recordFields]);
    const rsp = await apiRequest(app, "diamanteRead", {
      pk: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["1"]);
  });

  it("diamanteList", async () => {
    tracker.on.select("diamante").response([recordFields]);
    const rsp = await apiRequest(app, "diamanteList", {
      where: [["diamante_id", "=", "1"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it("diamanteDel", async () => {
    tracker.on.delete("diamante").response(1);
    const rsp = await apiRequest(app, "diamanteDel", {
      pk: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("diamanteCreate", async () => {
    tracker.on.any("diamante").response([recordFields]);
    const rsp = await apiRequest(app, "diamanteCreate", {
      data: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("diamanteUpdate", async () => {
    tracker.on.any("diamante").response([recordFields]);
    const rsp = await apiRequest(app, "diamanteUpdate", {
      pk: { diamante_id: "1" },
      data: { diamante_id: "A", diamante: "B" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });
});
