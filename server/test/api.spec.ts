import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { app } from "../app";
import { setTracker } from "../lib/set_tracker";
import { apiRequestQuery, rpcResponseError } from "./aux";

describe("Api", () => {
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
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("method desconhecido", async () => {
    const rsp = await apiRequestQuery(app, "agendaTelefoneSchemaDesc", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponseError(-32601, "Method not found"));
  });

  it("indice", async () => {
    const rsp = await apiRequestQuery(app, "index", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toMatchSnapshot();
  });
});
