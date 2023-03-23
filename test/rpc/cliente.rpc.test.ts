import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";

describe("cliente", () => {
  it("clienteList", async () => {
    const rsp = await fetchTrpc.cliente.list.query({
      where: [["cliente_id", "=", 1]],
      select: ["cliente_id"],
    });

    expect(rsp).toEqual([
      {
        cliente_id: 1,
      },
    ]);
  });

  it("clienteRead", async () => {
    const rsp = await fetchTrpc.cliente.read.query({
      id: { cliente_id: 1 },
      select: ["cliente_id"],
    });

    expect(rsp).toEqual({
      cliente_id: 1,
    });
  });

  it("clienteVendaMensalQuantidade", async () => {
    const rsp = await fetchTrpc.cliente.vendaMensalQuantidade.query({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": 10, categoria: "cat1" }]);
  });

  it("clienteVendaMensalValor", async () => {
    //---
    const rsp = await fetchTrpc.cliente.vendaMensalValor.query({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": "20", categoria: "cat1" }]);
  });

  it("clienteVendaMensalValorMedio", async () => {
    const rsp = await fetchTrpc.cliente.vendaMensalValorMedio.query({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": "2,00", categoria: "cat1" }]);
  });
});
