// @ts-nocheck
import { describe, expect, it } from "vitest";
import {
  mensal,
  mensalProduto,
  mensalVendedor,
  mensalVendedorProduto,
  mensalVendedorUf,
} from "./venda";

const data = [
  {
    origem: "VT",
    NmCategoria: "prod1",
    DtEmissao: "2020-01-01",
    Quantidade: 1,
    VlTotal: 1.1,
    Tipo: "E",
    NmVendedor: "Vend1",
    uf: "ES",
  },
  {
    origem: "FV",
    NmCategoria: "prod1",
    DtEmissao: "2020-01-02",
    Quantidade: 3,
    VlTotal: 3.3,
    Tipo: "S",
    NmVendedor: "Vend1",
    uf: "ES",
  },
];

describe("venda", () => {
  it("mensal", () => {
    expect(mensal(data)).toEqual([{ mes: "2020-01", valor: "2,20" }]);
  });
  it("mensalProduto", () => {
    expect(mensalProduto(["2020-01"], data)).toEqual([
      { produto: "prod1", quantidade: 2, valor: "2,20", valorMedio: "1,10" },
    ]);
  });
  it("mensalVendedor", () => {
    expect(mensalVendedor(["2020-01"], data)).toEqual([
      { vendedor: "Vend1", valor: "2,20" },
    ]);
  });
  it("mensalVendedorProduto", () => {
    expect(mensalVendedorProduto(["2020-01"], ["Vend1"], data)).toEqual([
      { produto: "prod1", quantidade: 2, valor: "2,20", valorMedio: "1,10" },
    ]);
  });
  it("mensalVendedorUf", () => {
    expect(mensalVendedorUf(["2020-01"], ["Vend1"], data)).toEqual([
      { uf: "ES", valor: "2,20" },
    ]);
  });
});
