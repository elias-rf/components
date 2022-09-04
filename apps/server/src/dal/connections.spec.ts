import {
  afterEach,
  beforeAll,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";
import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { connections } from "./connections";

jest.mock("./connections", () => ({
  connections: {
    plano: knex({ client: MockClient }),
    oftalmo: knex({ client: MockClient }),
    fullvision: knex({ client: MockClient }),
  },
}));

describe("teste", () => {
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
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
