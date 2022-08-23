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
    expect(rsp.body).toEqual(
      rpcResponse({
        id: ["agenda_telefone_id"],
        fields: expect.any(Array),
      })
    );
  });

  it("clienteRead", async () => {
    tracker.on.select("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteRead", {
      pk: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["171"]);
    expect(tracker.history.select[0].sql).toEqual(
      'select "id", "name", "department", "email" from "phonebook" where "id" = ?'
    );
  });

  it("clienteList", async () => {
    tracker.on.select("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteList", {
      where: [["agenda_telefone_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it("clienteDel", async () => {
    tracker.on.delete("phonebook").response(1);
    const rsp = await apiRequest(app, "clienteDel", {
      pk: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("clienteCreate", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteCreate", {
      data: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("clienteCreate no params", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteCreate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError(0, "An unexpected error occurred")
    );
  });

  it("clienteUpdate", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteUpdate", {
      pk: { agenda_telefone_id: "171" },
      data: { agenda_telefone_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("clienteUpdate no params", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "clienteUpdate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponseError(0, "Pk inválido use um objeto"));
  });
});
