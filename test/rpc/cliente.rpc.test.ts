import { describe, expect, it } from "vitest";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("cliente", () => {
  it("clienteSchema", async () => {
    const rsp = await fetcherRpc.query("clienteSchema");

    expect(rsp.length).toEqual(10);
  });

  it("clienteClear", async () => {
    const rsp = await fetcherRpc.query("clienteClear");

    expect(rsp).toEqual({
      cliente_id: null,
      cnpj: null,
      is_ativo: null,
      nome: null,
      uf: null,
      vendedor_id: null,
      cidade: null,
      data_cadastro: "",
      email: "",
      identidade: "",
    });
  });

  it("clienteList", async () => {
    const rsp = await fetcherRpc.query("clienteList", {
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
    const rsp = await fetcherRpc.query("clienteRead", {
      id: { cliente_id: 1 },
      select: ["cliente_id"],
    });

    expect(rsp).toEqual({
      cliente_id: 1,
    });
  });

  it("clienteVendaMensalQuantidadeSchema", async () => {
    const rsp = await fetcherRpc.query("clienteVendaMensalQuantidadeSchema", {
      inicio: "2020-01-01",
      fim: "2020-02-01",
    });

    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-01",
        typeField: "float",
        fieldClass: "text-right",
      },
      {
        name: "2020-02",
        typeField: "float",
        fieldClass: "text-right",
      },
    ]);
  });
  it("clienteVendaMensalValorSchema", async () => {
    const rsp = await fetcherRpc.query("clienteVendaMensalValorSchema", {
      inicio: "2020-02-01",
      fim: "2020-03-01",
    });

    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-02",
        typeField: "float",
        fieldClass: "text-right",
      },
      {
        name: "2020-03",
        typeField: "float",
        fieldClass: "text-right",
      },
    ]);
  });

  it("clienteVendaMensalValorMedioSchema", async () => {
    const rsp = await fetcherRpc.query("clienteVendaMensalValorMedioSchema", {
      inicio: "2020-01-01",
      fim: "2020-02-01",
    });

    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-01",
        typeField: "float",
        fieldClass: "text-right",
      },
      {
        name: "2020-02",
        typeField: "float",
        fieldClass: "text-right",
      },
    ]);
  });

  it("clienteVendaMensalQuantidade", async () => {
    const rsp = await fetcherRpc.query("clienteVendaMensalQuantidade", {
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": 10, categoria: "cat1" }]);
  });

  it("clienteVendaMensalValor", async () => {
    //---
    const rsp = await fetcherRpc.query("clienteVendaMensalValor", {
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": "20", categoria: "cat1" }]);
  });

  it("clienteVendaMensalValorMedio", async () => {
    const rsp = await fetcherRpc.query("clienteVendaMensalValorMedio", {
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });

    expect(rsp).toEqual([{ "2020-01": "2,00", categoria: "cat1" }]);
  });
});
