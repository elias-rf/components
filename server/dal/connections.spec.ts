import knex from "knex";
import { createTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { connections } from "./connections";

vi.mock("./connections", () => ({
  connections: {
    plano: knex({ client: MockClient }),
    oftalmo: knex({ client: MockClient }),
    fullvision: knex({ client: MockClient }),
  },
}));

describe("teste", () => {
  let tracker: Tracker;

  beforeAll(() => {
    tracker = createTracker(connections.plano);
  });

  afterEach(() => {
    tracker.reset();
  });

  test("mock", async () => {
    tracker.on.select("table").response([{ fild: 1 }]);
    const resp = await connections.plano("table");
    expect(resp).toEqual([{ fild: 1 }]);
    expect(typeof connections).toEqual("object");
    expect(typeof connections.plano).toEqual("function");
    expect(connections.plano).toHaveProperty("select");
  });
});
