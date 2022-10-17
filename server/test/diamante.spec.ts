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
import { setTracker } from "../lib/set-tracker";
import { apiRequest, rpcResponse } from "./aux";

describe("diamante", () => {
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

  it("diamanteSchema", async () => {
    const rsp = await apiRequest(app, "crudSchema", { table: "diamante" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("diamanteRead", async () => {
    const rsp = await apiRequest(app, "crudRead", {
      table: "diamante",
      id: { diamante_id: "1" },
      select: ["diamante_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        diamante_id: "A",
      })
    );
    expect(tracker.history.any[0].bindings).toEqual(["1"]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "id" from "diamante" where "id" = ?'
    );
  });

  it("diamanteList", async () => {
    const rsp = await apiRequest(app, "crudList", {
      table: "diamante",
      where: [["diamante_id", "=", "A"]],
      select: ["diamante_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse([
        {
          diamante_id: "A",
        },
      ])
    );
    expect(tracker.history.any[0].bindings).toEqual(["A", 50]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "id" from "diamante" where ("id" = ?) limit ?'
    );
  });

  it("diamanteDel", async () => {
    const rsp = await apiRequest(app, "crudDel", {
      table: "diamante",
      id: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
    expect(tracker.history.any[0].bindings).toEqual(["1"]);
    expect(tracker.history.any[0].sql).toEqual(
      'delete from "diamante" where "id" = ?'
    );
  });

  it("diamanteCreate", async () => {
    const rsp = await apiRequest(app, "crudCreate", {
      table: "diamante",
      data: { diamante_id: "1" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        diamante_id: "A",
      })
    );
    expect(tracker.history.any[0].bindings).toEqual(["1"]);
    expect(tracker.history.any[0].sql).toEqual(
      'insert into "diamante" ("id") values (?)'
    );
  });

  it("diamanteUpdate", async () => {
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "diamante",
      id: { diamante_id: "A" },
      data: { diamante_id: "B" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        diamante_id: "B",
      })
    );
    expect(tracker.history.any[0].bindings).toEqual(["B", "A"]);
    expect(tracker.history.any[0].sql).toEqual(
      'update "diamante" set "id" = ? where "id" = ?'
    );
  });
});
