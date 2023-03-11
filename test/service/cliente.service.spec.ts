import { describe, expect, it } from "vitest";
import { clienteServiceFactory } from "../../model/cliente/cliente.service";

const clienteService = clienteServiceFactory();

describe("clienteService", () => {
  it("clienteSchema", async () => {
    const rsp = await clienteService.query.schema();
    expect(rsp.length).toEqual(10);
  });

  it("clienteClear", async () => {
    const rsp = await clienteService.query.clear();
    expect(rsp).toEqual({
      cidade: null,
      cliente_id: null,
      cnpj: null,
      data_cadastro: "",
      email: "",
      identidade: "",
      is_ativo: null,
      nome: null,
      uf: null,
      vendedor_id: null,
    });
  });
  it("clienteList", async () => {
    const rsp = await clienteService.query.list({
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
    const rsp = await clienteService.query.read({
      id: { cliente_id: 1 },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual({
      cliente_id: 1,
    });
  });

  it("clienteVendaMensalQuantidadeSchema", async () => {
    const rsp = await clienteService.query.vendaMensalQuantidadeSchema({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-01",
        fieldClass: "text-right",
        type: "float",
      },
    ]);
  });
  it("clienteVendaMensalValorSchema", async () => {
    const rsp = await clienteService.query.vendaMensalValorSchema({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-01",
        fieldClass: "text-right",
        type: "float",
      },
    ]);
  });
  it("clienteVendaMensalValorMedioSchema", async () => {
    const rsp = await clienteService.query.vendaMensalValorMedioSchema({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2020-01",
        fieldClass: "text-right",
        type: "float",
      },
    ]);
  });

  it("vendaMensalQuantidade", async () => {
    const rsp = await clienteService.query.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      cliente: 1,
    });
    expect(rsp).toEqual([{ categoria: "cat1", "2020-01": 10 }]);
  });

  it("vendaMensalValor", async () => {
    const rsp = await clienteService.query.vendaMensalValor({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      cliente: 1,
    });
    expect(rsp).toEqual([{ categoria: "cat1", "2020-01": "20" }]);
  });

  it("vendaMensalMedio ok", async () => {
    const rsp = await clienteService.query.vendaMensalValorMedio({
      inicio: "2020-01-01",
      fim: "2020-01-31",
      cliente: 1,
    });
    expect(rsp).toEqual([{ categoria: "cat1", "2020-01": "2,00" }]);
  });
});
