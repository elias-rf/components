import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { CrudModel } from "../crud/crud.model";

describe("rpc de cliente", () => {
  const knexDb = Knex({ client: MockClient });
  const crud = new CrudModel({ plano: knexDb } as TConnections);
  let tracker: Tracker;

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

  it("lista sem argumentos", async () => {
    const rsp = await crud.list({
      table: "cliente",
      where: [["cliente_id", "=", -10]],
    });
    expect(rsp).toEqual([{ cliente_id: 10 }]);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10, 50],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where ("CdCliente" = ?) limit ?',
        },
      ],
    });
  });

  it("lista com argumentos", async () => {
    const rsp = await crud.list({
      table: "cliente",
      where: [["cliente_id", "=", -10]],
    });
    expect(rsp).toEqual([{ cliente_id: 10 }]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10, 50],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where ("CdCliente" = ?) limit ?',
        },
      ],
    });
  });

  it("read", async () => {
    const rsp = await crud.read({
      table: "cliente",
      id: { cliente_id: -10 },
    });
    expect(rsp).toEqual({ cliente_id: 10 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10],
          sql: 'select "CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo" from "CadCli" where "CdCliente" = ?',
        },
      ],
    });
  });

  it("del", async () => {
    const rsp = await crud.del({
      table: "cliente",
      id: { cliente_id: "10" },
    });
    expect(rsp).toEqual(1);

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["10"],
          sql: 'delete from "CadCli" where "CdCliente" = ?',
        },
      ],
    });
  });

  it("create", async () => {
    const rsp = await crud.create({
      table: "cliente",
      data: { cliente_id: -10 },
    });
    expect(rsp).toEqual({ cliente_id: 10 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [-10],
          sql: 'insert into "CadCli" ("CdCliente") values (?)',
        },
      ],
    });
  });

  it("clienteUpdate no params", async () => {
    // @ts-expect-error teste para ausencia de parametros
    await expect(crud.update({ table: "cliente" })).rejects.toThrow(
      "Id deve ser informado"
    );
  });

  it("update", async () => {
    const rsp = await crud.update({
      table: "cliente",
      id: { cliente_id: "10" },
      data: { cliente_id: 10 },
    });
    expect(rsp).toEqual({ cliente_id: 2 });

    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [10, "10"],
          sql: 'update "CadCli" set "CdCliente" = ? where "CdCliente" = ?',
        },
      ],
    });
  });
});
