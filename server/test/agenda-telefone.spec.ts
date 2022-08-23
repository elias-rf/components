import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse, rpcResponseError } from "./aux";

describe("agendaTelefone", () => {
  let tracker: Tracker;
  vi.mock("../src/dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));
  const recordNames = {
    agenda_telefone_id: 171,
    nome: "vago78",
    setor: "qualidade",
    email: "vago",
  };
  const recordFields = {
    id: 171,
    name: "vago78",
    department: "qualidade",
    email: "vago",
  };

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it("agendaTelefoneSchema", async () => {
    const rsp = await apiRequest(app, "agendaTelefoneSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        id: ["agenda_telefone_id"],
        fields: expect.any(Array),
      })
    );
  });

  it("agendaTelefoneRead", async () => {
    tracker.on.select("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneRead", {
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

  it("agendaTelefoneList", async () => {
    tracker.on.select("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneList", {
      where: [["agenda_telefone_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([recordNames]));
  });

  it("agendaTelefoneDel", async () => {
    tracker.on.delete("phonebook").response(1);
    const rsp = await apiRequest(app, "agendaTelefoneDel", {
      pk: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("agendaTelefoneCreate", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneCreate", {
      data: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("agendaTelefoneCreate no params", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneCreate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError(0, "An unexpected error occurred")
    );
  });

  it("agendaTelefoneUpdate", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneUpdate", {
      pk: { agenda_telefone_id: "171" },
      data: { agenda_telefone_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(recordNames));
  });

  it("agendaTelefoneUpdate no params", async () => {
    tracker.on.any("phonebook").response([recordFields]);
    const rsp = await apiRequest(app, "agendaTelefoneUpdate", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponseError(0, "Pk inválido use um objeto"));
  });
});
