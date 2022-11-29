import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../utils/api/fetch-mock-rpc";
import { clienteService } from "./cliente.service";

globalThis.fetch = fetchMockRpc.fetch;

const data = [
  {
    NmCategoria: "HILITE",
    CdCliente: 189,
    anoMes: "2021-11",
    quantidade: 608,
    valor: 45600,
  },
  {
    NmCategoria: "LITEFIT",
    CdCliente: 189,
    anoMes: "2021-11",
    quantidade: 2,
    valor: 60,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2021-11",
    quantidade: 50,
    valor: 2100,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2021-12",
    quantidade: 1013,
    valor: 42546,
  },
  {
    NmCategoria: "METILCELULOSE",
    CdCliente: 189,
    anoMes: "2021-12",
    quantidade: 273,
    valor: 7644,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-01",
    quantidade: 15,
    valor: 630,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-02",
    quantidade: 1086,
    valor: 45612,
  },
  {
    NmCategoria: "METILCELULOSE",
    CdCliente: 189,
    anoMes: "2022-02",
    quantidade: 387,
    valor: 10836,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-03",
    quantidade: 784,
    valor: 33136,
  },
  {
    NmCategoria: "METILCELULOSE",
    CdCliente: 189,
    anoMes: "2022-03",
    quantidade: 220,
    valor: 6160,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-04",
    quantidade: 1088,
    valor: 45696,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-05",
    quantidade: 1220,
    valor: 54140,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-06",
    quantidade: 1111,
    valor: 49645,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-07",
    quantidade: 1259,
    valor: 55820,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-08",
    quantidade: 1443,
    valor: 65446.5,
  },
  {
    NmCategoria: "METILCELULOSE",
    CdCliente: 189,
    anoMes: "2022-08",
    quantidade: 785,
    valor: 25434,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-09",
    quantidade: 932,
    valor: 41885,
  },
  {
    NmCategoria: "LITEFLEX",
    CdCliente: 189,
    anoMes: "2022-10",
    quantidade: 0,
    valor: 0,
  },
];

describe("clienteService", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("schema ok", async () => {
    fetchMockRpc.mock("crudSchema", {
      status: 200,
      body: {
        result: {
          pk: ["CdCliente"],
          schema: [],
        },
      },
    });
    const rsp = await clienteService.schema();
    expect(rsp).toEqual({
      pk: ["CdCliente"],
      schema: [],
    });
    expect(fetchMockRpc.history(0)).toEqual({
      url: '/api/rpc?rpc={"jsonrpc":"2.0","id":1,"method":"crudSchema","params":{"table":"cliente"}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    });
  });

  it("vendaMensalQuantidadeSchema ok", async () => {
    const rsp = await clienteService.vendaMensalQuantidadeSchema({
      inicio: "2021-01-01",
      fim: "2021-03-31",
    });
    expect(rsp).toEqual([
      {
        name: "categoria",
        label: "Produto",
        primaryKey: true,
      },
      {
        name: "2021-01",
        fieldClass: "text-right",
        type: "float",
      },
      {
        name: "2021-02",
        fieldClass: "text-right",
        type: "float",
      },
      {
        name: "2021-03",
        fieldClass: "text-right",
        type: "float",
      },
    ]);
  });

  it("vendaMensalQuantidade ok", async () => {
    fetchMockRpc.mock("nfSaidaVendaMensal", {
      status: 200,
      body: {
        result: data,
      },
    });
    const rsp = await clienteService.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-12-31",
      cliente: 123,
    });
    expect(rsp).toEqual([
      { categoria: "HILITE", "2021-11": 608 },
      { categoria: "LITEFIT", "2021-11": 2 },
      {
        categoria: "LITEFLEX",
        "2021-11": 50,
        "2021-12": 1013,
        "2022-01": 15,
        "2022-02": 1086,
        "2022-03": 784,
        "2022-04": 1088,
        "2022-05": 1220,
        "2022-06": 1111,
        "2022-07": 1259,
        "2022-08": 1443,
        "2022-09": 932,
        "2022-10": 0,
      },
      {
        categoria: "METILCELULOSE",
        "2021-12": 273,
        "2022-02": 387,
        "2022-03": 220,
        "2022-08": 785,
      },
    ]);
    expect(fetchMockRpc.history(0)).toEqual({
      url: '/api/rpc?rpc={"jsonrpc":"2.0","id":2,"method":"nfSaidaVendaMensal","params":{"inicio":"2020-01-01","fim":"2020-12-31","cliente":123}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    });
  });

  it("vendaMensalValor ok", async () => {
    fetchMockRpc.mock("nfSaidaVendaMensal", {
      status: 200,
      body: {
        result: data,
      },
    });
    const rsp = await clienteService.vendaMensalValor({
      inicio: "2020-01-01",
      fim: "2020-12-31",
      cliente: 123,
    });
    expect(rsp).toEqual([
      { categoria: "HILITE", "2021-11": "45.600" },
      { categoria: "LITEFIT", "2021-11": "60" },
      {
        categoria: "LITEFLEX",
        "2021-11": "2.100",
        "2021-12": "42.546",
        "2022-01": "630",
        "2022-02": "45.612",
        "2022-03": "33.136",
        "2022-04": "45.696",
        "2022-05": "54.140",
        "2022-06": "49.645",
        "2022-07": "55.820",
        "2022-08": "65.447",
        "2022-09": "41.885",
        "2022-10": "0",
      },
      {
        categoria: "METILCELULOSE",
        "2021-12": "7.644",
        "2022-02": "10.836",
        "2022-03": "6.160",
        "2022-08": "25.434",
      },
    ]);
    expect(fetchMockRpc.history(0)).toEqual({
      url: '/api/rpc?rpc={"jsonrpc":"2.0","id":3,"method":"nfSaidaVendaMensal","params":{"inicio":"2020-01-01","fim":"2020-12-31","cliente":123}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    });
  });

  it("vendaMensalMedio ok", async () => {
    fetchMockRpc.mock("nfSaidaVendaMensal", {
      status: 200,
      body: {
        result: data,
      },
    });
    const rsp = await clienteService.vendaMensalValorMedio({
      inicio: "2020-01-01",
      fim: "2020-12-31",
      cliente: 123,
    });
    expect(rsp).toEqual([
      { categoria: "HILITE", "2021-11": "75,00" },
      { categoria: "LITEFIT", "2021-11": "30,00" },
      {
        categoria: "LITEFLEX",
        "2021-11": "42,00",
        "2021-12": "42,00",
        "2022-01": "42,00",
        "2022-02": "42,00",
        "2022-03": "42,27",
        "2022-04": "42,00",
        "2022-05": "44,38",
        "2022-06": "44,68",
        "2022-07": "44,34",
        "2022-08": "45,35",
        "2022-09": "44,94",
        "2022-10": "0,00",
      },
      {
        categoria: "METILCELULOSE",
        "2021-12": "28,00",
        "2022-02": "28,00",
        "2022-03": "28,00",
        "2022-08": "32,40",
      },
    ]);
    expect(fetchMockRpc.history(0)).toEqual({
      url: '/api/rpc?rpc={"jsonrpc":"2.0","id":4,"method":"nfSaidaVendaMensal","params":{"inicio":"2020-01-01","fim":"2020-12-31","cliente":123}}',
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    });
  });
});
