import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse, rpcResponseError } from "./aux";

describe("cliente", () => {
  let tracker: Tracker;
  vi.mock("../src/dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));

  const recordNames = {
    cliente_id: 171,
  };
  const recordFields = {
    CdCliente: 171,
  };

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it("clienteSchema", async () => {
    const rsp = await apiRequest(app, "clienteSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("clienteRead", async () => {
    tracker.on.select("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteRead", {
      id: { cliente_id: "171" },
      select: ["cliente_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["171"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "CdCliente" from "CadCli" where "CdCliente" = ?'
    );
  });

  it("clienteList", async () => {
    tracker.on.select("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteList", {
      where: [["cliente_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it("clienteDel", async () => {
    tracker.on.delete("CadCli").response([1]);
    const rsp = await apiRequest(app, "clienteDel", {
      id: { cliente_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("clienteCreate", async () => {
    tracker.on.any("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteCreate", {
      data: { cliente_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("clienteCreate no params", async () => {
    tracker.on.any("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteCreate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError(0, "Select deve ser um array ou objeto")
    );
  });

  it("clienteUpdate", async () => {
    tracker.on.any("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteUpdate", {
      id: { cliente_id: "171" },
      data: { cliente_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("clienteUpdate no params", async () => {
    tracker.on.any("CadCli").response([recordFields]);
    const rsp = await apiRequest(app, "clienteUpdate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponseError(0, "Id deve ser informado"));
  });
});
