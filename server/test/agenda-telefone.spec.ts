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
import { knexMockHistory } from "../../utils/data/knex-mock-history";
import { app } from "../app";
import { setTracker } from "../lib/set-tracker";
import { apiRequest, rpcResponse, rpcResponseError } from "./aux";

describe("agendaTelefone", () => {
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

  it("agendaTelefoneSchema", async () => {
    const rsp = await apiRequest(app, "crudSchema", {
      table: "agenda_telefone",
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("agendaTelefoneRead", async () => {
    const rsp = await apiRequest(app, "crudRead", {
      table: "agenda_telefone",
      id: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        agenda_telefone_id: 171,
      })
    );
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["171"],
          sql: 'select "id", "name", "department", "email" from "phonebook" where "id" = ?',
        },
      ],
    });
  });

  it("agendaTelefoneList", async () => {
    const rsp = await apiRequest(app, "crudList", {
      table: "agenda_telefone",
      where: [["agenda_telefone_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse([
        {
          agenda_telefone_id: 171,
        },
      ])
    );
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["171", 50],
          sql: 'select "id", "name", "department", "email" from "phonebook" where ("id" = ?) limit ?',
        },
      ],
    });
  });

  it("agendaTelefoneDel", async () => {
    const rsp = await apiRequest(app, "crudDel", {
      table: "agenda_telefone",
      id: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
    expect(tracker.history.any[0].bindings).toEqual(["171"]);
    expect(tracker.history.any[0].sql).toEqual(
      'delete from "phonebook" where "id" = ?'
    );
  });

  it("agendaTelefoneCreate", async () => {
    const rsp = await apiRequest(app, "crudCreate", {
      table: "agenda_telefone",
      data: { agenda_telefone_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        agenda_telefone_id: 171,
      })
    );
    expect(tracker.history.any[0].bindings).toEqual(["171"]);
    expect(tracker.history.any[0].sql).toEqual(
      'insert into "phonebook" ("id") values (?)'
    );
  });

  it("agendaTelefoneCreate no params", async () => {
    const rsp = await apiRequest(app, "crudCreate", {
      table: "agenda_telefone",
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError("Error", "Select deve ser um array ou objeto")
    );
  });

  it("agendaTelefoneUpdate", async () => {
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "agenda_telefone",
      id: { agenda_telefone_id: "171" },
      data: { agenda_telefone_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponse({
        agenda_telefone_id: 172,
      })
    );
    expect(tracker.history.any[0].bindings).toEqual(["172", "171"]);
    expect(tracker.history.any[0].sql).toEqual(
      'update "phonebook" set "id" = ? where "id" = ?'
    );
  });

  it("agendaTelefoneUpdate no params", async () => {
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "agenda_telefone",
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError("Error", "Id deve ser informado")
    );
  });
});
