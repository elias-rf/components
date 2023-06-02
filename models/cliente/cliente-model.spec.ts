import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { describe, expect, it } from "vitest";

describe("rpc de cliente", () => {
  const tracker = createTracker(connectionsMock.plano);
  const models = modelsMock;

  beforeEach(() => {
    tracker.reset();
  });

  it("lista sem argumentos", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await models.cliente.list({});
    expect(rsp).toEqual([
      {
        cliente_id: 1,
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50],
        sql: "select top (@p0) [CdCliente], [RzSocial], [Cidade], [Uf], [CGC], [CdVendedor], [FgAtivo], [EMail], [NumIdentidade], [DtCadastro] from [CadCli]",
      },
    ]);
  });

  it("lista com argumentos", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await models.cliente.list({
      filter: { cliente_id: "=1" },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual([
      {
        cliente_id: 1,
      },
    ]);

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [CdCliente] from [CadCli] where ([CdCliente] = @p1)",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await models.cliente.read({
      id: { cliente_id: 1 },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual({ cliente_id: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [CdCliente] from [CadCli] where ([CdCliente] = @p0)",
      },
    ]);
  });

  it("create e del", async () => {
    tracker.on.insert("CadCli").response([{ CdCliente: 1 }]);
    tracker.on.delete("CadCli").response([1]);
    const crt = await models.cliente.create({
      data: {
        cliente_id: 1,
        data_cadastro: "2020-01-01",
        email: "",
        identidade: "",
      },
      select: ["cliente_id"],
    });
    expect(crt).toEqual({ cliente_id: 1 });

    const dlt = await models.cliente.del({
      id: { cliente_id: "10" },
    });
    expect(dlt).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, "2020-01-01", "", ""],
        sql: "insert into [CadCli] ([CdCliente], [DtCadastro], [EMail], [NumIdentidade]) output inserted.[CdCliente] values (@p0, @p1, @p2, @p3)",
      },
      {
        bindings: ["10"],
        sql: "delete from [CadCli] where ([CdCliente] = @p0);select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.on.update("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await models.cliente.update({
      id: { cliente_id: 1 },
      data: { email: "" },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual({ cliente_id: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["", 1],
        sql: "update [CadCli] set [EMail] = @p0 output inserted.[CdCliente] where ([CdCliente] = @p1)",
      },
    ]);
  });

  it("vendaMensalQuantidade", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ NmCategoria: "cat1", anoMes: "2020-01", quantidade: 10 }]);
    const rsp = await models.cliente.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(rsp).toEqual([{ "2020-01": 10, categoria: "cat1" }]);
  });
});
