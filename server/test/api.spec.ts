import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponseError } from "./aux";

describe("Api", () => {
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

  it("method desconhecido", async () => {
    const rsp = await apiRequest(app, "agendaTelefoneSchemaDesc", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponseError(-32601, "Method not found"));
  });
});
