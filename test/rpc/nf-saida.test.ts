import { describe, expect, it } from "vitest";
import { fetchTrpc } from "../../client/lib/fetch-trpc";

describe("nfSaida", () => {
  it("nfSaidaList", async () => {
    const rsp = await fetchTrpc.nfSaida.list.query({
      where: [
        ["filial_id", "=", 1],
        ["nota_id", "=", 1],
      ],
      select: ["filial_id"],
    });

    expect(rsp).toEqual([{ filial_id: 1 }]);
  });

  it("nfSaidaRead", async () => {
    const rsp = await fetchTrpc.nfSaida.read.query({
      id: { filial_id: 1, nota_id: 1, serie_id: 1, modelo_id: 1 },
      select: ["filial_id"],
    });

    expect(rsp).toEqual({ filial_id: 1 });
  });

  it("nfSaidaTransferenciaDiario", async () => {
    const rsp = await fetchTrpc.nfSaida.transferenciaDiario.query({
      inicio: "2020-01-01",
      fim: "2020-02-01",
    });

    expect(rsp).toEqual([{ cat1: 10, dia: "2020-01-01" }]);
  });

  it("nfSaidaTransferenciaMensal", async () => {
    const rsp = await fetchTrpc.nfSaida.transferenciaMensal.query({
      mes: "2020-01",
    });

    expect(rsp).toEqual([{ cat1: 10, mes: "2020-01" }]);
  });

  it("nfSaidaTransferenciaModelo", async () => {
    const rsp = await fetchTrpc.nfSaida.transferenciaModelo.query({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([{ modelo: "prodPlano1", quantidade: 10 }]);
  });

  it("nfSaidaVendaDiario", async () => {
    const rsp = await fetchTrpc.nfSaida.vendaDiario.query({
      inicio: "2020-01-01",
      fim: "2020-02-01",
      uf: ["SP"],
    });

    expect(rsp).toEqual([
      {
        DtEmissao: "2020-01-01T00:00:00.000Z",
        NmCategoria: "cat1",
        quantidade: 10,
        valor: 20,
      },
    ]);
  });

  it("nfSaidaVendaMensalCliente", async () => {
    const rsp = await fetchTrpc.nfSaida.vendaMensalCliente.query({
      inicio: "2020-01-01",
      fim: "2020-02-01",
      cliente: 1,
    });

    expect(rsp).toEqual([
      {
        CdCliente: 1,
        NmCategoria: "cat1",
        anoMes: "2020-01",
        quantidade: 10,
        valor: 20,
      },
    ]);
  });

  it("nfSaidaVendaAnalitico", async () => {
    const rsp = await fetchTrpc.nfSaida.vendaAnalitico.query({
      inicio: "2020-01-01",
      fim: "2020-02-01",
    });

    expect(rsp).toEqual([
      {
        CdProduto: "1",
        CdVendedor: 1,
        Descricao: "prodPlano1",
        DtEmissao: "2020-01-01T00:00:00.000Z",
        NmVendedor: "ven1",
        NmCategoria: "cat1",
        NumNota: 1,
        Quantidade: 10,
        Serie: "1  ",
        Tipo: "S",
        VlTotal: null,
        origem: "VT",
        uf: "SP ",
      },
      {
        CdProduto: "1",
        CdVendedor: 1,
        Descricao: "prodPlano1",
        DtEmissao: "2020-01-01T00:00:00.000Z",
        NmVendedor: "ven1",
        NmCategoria: "cat1",
        NumNota: 1,
        Quantidade: 10,
        Serie: "1  ",
        Tipo: "S",
        VlTotal: null,
        origem: "FV",
        uf: "SP ",
      },
    ]);
  });
});
