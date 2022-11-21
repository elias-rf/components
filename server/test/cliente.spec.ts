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
import { apiRequest, rpcResponse, rpcResponseError } from "./aux";

describe("cliente", () => {
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

  it("clienteSchema", async () => {
    const rsp = await apiRequest(app, "crudSchema", { table: "cliente" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("clienteRead", async () => {
    const rsp = await apiRequest(app, "crudRead", {
      table: "cliente",
      id: { cliente_id: -10 },
      select: ["cliente_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        cliente_id: 10,
      })
    );
    expect(tracker.history.any[0].bindings).toEqual([-10]);
    expect(tracker.history.any[0].sql).toEqual(
      'select "CdCliente" from "CadCli" where "CdCliente" = ?'
    );
  });

  it("clienteList", async () => {
    const rsp = await apiRequest(app, "crudList", {
      table: "cliente",
      where: [["cliente_id", "=", -10]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse([
        {
          cliente_id: 10,
        },
      ])
    );
  });

  it("clienteDel", async () => {
    const rsp = await apiRequest(app, "crudDel", {
      table: "cliente",
      id: { cliente_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("clienteCreate", async () => {
    const rsp = await apiRequest(app, "crudCreate", {
      table: "cliente",
      data: { cliente_id: -10 },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        cliente_id: 10,
      })
    );
  });

  it("clienteCreate no params", async () => {
    const rsp = await apiRequest(app, "crudCreate", { table: "cliente" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError("Error", "Select deve ser um array ou objeto")
    );
  });

  it("clienteUpdate", async () => {
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "cliente",
      id: { cliente_id: "171" },
      data: { cliente_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        cliente_id: 2,
      })
    );
  });
});
