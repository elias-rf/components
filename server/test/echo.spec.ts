import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../app";
import { apiRequestMutation, apiRequestQuery, rpcResponse } from "./aux";

describe("echo", () => {
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
  });

  afterEach(() => {
    tracker.reset();
  });

  it("echo mutation", async () => {
    const rsp = await apiRequestMutation(app, "echo", {
      id: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        arg1: { id: { diamante_id: "1" } },
        ctx: ["currentUser", "connections"],
      })
    );
  });
  it("echo query", async () => {
    const rsp = await apiRequestQuery(app, "echo", {
      id: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        arg1: { id: { diamante_id: "1" } },
        ctx: ["currentUser", "connections"],
      })
    );
  });
});
