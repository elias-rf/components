import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { knexMockHistory } from "../../utils/data/knex_mock_history";
import { app } from "../app";
import { apiRequest, rpcResponse, rpcResponseError } from "./aux";

describe("nfEntrada", () => {
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

  it("nfEntradaSchema", async () => {
    const rsp = await apiRequest(app, "crudSchema", { table: "nf_entrada" });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("nfEntradaRead", async () => {
    tracker.on.select("NfMestre").response([]);
    const rsp = await apiRequest(app, "crudRead", {
      table: "nf_entrada",
      id: { filial_id: 1, nota_id: "171", serie_id: "X", modelo_id: 1 },
      select: ["nota_id"],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse({}));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual([1, "171", "X", 1]);
    expect(tracker.history.select[0].sql).toEqual(
      `select "NroNf" from "NfMestre" where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?`
    );
  });

  it("nfEntradaList", async () => {
    tracker.on.select("NfMestre").response([]);
    const rsp = await apiRequest(app, "crudList", {
      table: "nf_entrada",
      where: [["nota_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([]));
  });

  it("nfEntradaDel", async () => {
    tracker.on.delete("NfMestre").response(1);
    const rsp = await apiRequest(app, "crudDel", {
      table: "nf_entrada",
      id: { filial_id: 1, nota_id: "171", serie_id: "X", modelo_id: 1 },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("nfEntradaCreate", async () => {
    // tracker.on.any("NfMestre").response([]);
    const rsp = await apiRequest(app, "crudCreate", {
      table: "nf_entrada",
      data: { nota_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(
      rpcResponseError(
        "Error",
        `insert into "NfMestre" ("NroNf") values ('171') - Mock handler not found`
      )
    );
  });

  it("nfEntradaUpdate", async () => {
    tracker.on.any("NfMestre").response([{ NroNf: "172" }]);
    const rsp = await apiRequest(app, "crudUpdate", {
      table: "nf_entrada",
      id: { filial_id: 1, nota_id: "171", serie_id: "X", modelo_id: 1 },
      data: { nota_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse({ nota_id: "172" }));
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["172", 1, "171", "X", 1],
          sql: 'update "NfMestre" set "NroNf" = ? where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?',
        },
      ],
    });
  });
});
