import { clienteStore } from "../../model/cliente/cliente.store";

const clienteStore = clienteStore;

describe("clienteStore", () => {
  it("getList", async () => {
    await clienteStore.getState().getList({
      where: [["cliente_id", "=", "1"]],
      select: ["cliente_id"],
    });
    expect(clienteStore.getState().dataList).toEqual([
      {
        cliente_id: 1,
      },
    ]);
  });
  it("refreshList", async () => {
    await clienteStore.getState().refreshList();
    expect(clienteStore.getState().dataList).toEqual([
      {
        cliente_id: 1,
      },
    ]);
  });
  it("getRead", async () => {
    await clienteStore.getState().getRead({
      id: { cliente_id: "1" },
      select: ["cliente_id"],
    });
    expect(clienteStore.getState().dataRead).toEqual({
      cliente_id: 1,
    });
  });
  it("getSchema", async () => {
    await clienteStore.getState().getSchema();
    expect(clienteStore.getState().dataSchema.length).toEqual(10);
  });
  it("getClear", async () => {
    await clienteStore.getState().getClear();
    expect(clienteStore.getState().dataClear).toEqual({
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
  it("setCreate, setUpdate, setDelete", async () => {
    const crt = await clienteStore.getState().setCreate({
      data: {
        cliente_id: 22,
        nome: "Fulano",
        data_cadastro: "",
        email: "",
        identidade: "",
      },
      select: ["cliente_id"],
    });
    expect(crt).toEqual({
      cliente_id: 22,
    });
    const upd = await clienteStore.getState().setUpdate({
      id: { cliente_id: 22 },
      data: { nome: "Nome" },
      select: ["cliente_id"],
    });
    expect(upd).toEqual({
      cliente_id: 22,
    });
    const dlt = await clienteStore
      .getState()
      .setDel({ id: { cliente_id: 22 } });
    expect(dlt).toEqual(1);
  });
  it("getVendaMensalQuantidadeSchema", async () => {
    await clienteStore.getState().getVendaMensalQuantidadeSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(clienteStore.getState().dataVendaMensalQuantidadeSchema).toEqual([
      {
        label: "Produto",
        name: "categoria",
        primaryKey: true,
      },
      {
        fieldClass: "text-right",
        name: "2020-01",
        type: "float",
      },
    ]);
  });
  it("getVendaMensalQuantidade", async () => {
    await clienteStore.getState().getVendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(clienteStore.getState().dataVendaMensalQuantidade).toEqual([
      {
        "2020-01": 10,
        categoria: "cat1",
      },
    ]);
  });
  it("getVendaMensalValorSchema", async () => {
    await clienteStore.getState().getVendaMensalValorSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(clienteStore.getState().dataVendaMensalValorSchema).toEqual([
      {
        label: "Produto",
        name: "categoria",
        primaryKey: true,
      },
      {
        fieldClass: "text-right",
        name: "2020-01",
        type: "float",
      },
    ]);
  });
  it("getVendaMensalValor", async () => {
    await clienteStore.getState().getVendaMensalValor({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(clienteStore.getState().dataVendaMensalValor).toEqual([
      {
        "2020-01": "20",
        categoria: "cat1",
      },
    ]);
  });
  it("getVendaMensalValorMedioSchema", async () => {
    await clienteStore.getState().getVendaMensalValorMedioSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(clienteStore.getState().dataVendaMensalValorMedioSchema).toEqual([
      {
        label: "Produto",
        name: "categoria",
        primaryKey: true,
      },
      {
        fieldClass: "text-right",
        name: "2020-01",
        type: "float",
      },
    ]);
  });
  it("getVendaMensalValorMedio", async () => {
    await clienteStore.getState().getVendaMensalValorMedio({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(clienteStore.getState().dataVendaMensalValorMedio).toEqual([
      {
        "2020-01": "2,00",
        categoria: "cat1",
      },
    ]);
  });
});
