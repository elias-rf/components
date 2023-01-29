import { describe, expect, it } from "vitest";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";

describe("nfSaida", () => {
  it("nfSaidaSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaSchema");

    expect(rsp.length).toEqual(90);
  });

  it("nfSaidaClear", async () => {
    const rsp = await fetcherRpc.query("nfSaidaClear");

    expect(rsp).toEqual(expect.any(Object));
  });

  it("nfSaidaList", async () => {
    const rsp = await fetcherRpc.query("nfSaidaList", {
      where: [
        ["filial_id", "=", 1],
        ["nota_id", "=", 1],
      ],
      select: ["filial_id"],
    });

    expect(rsp).toEqual([{ filial_id: 1 }]);
  });

  it("nfSaidaRead", async () => {
    const rsp = await fetcherRpc.query("nfSaidaRead", {
      id: { filial_id: 1, nota_id: 1, serie_id: 1, modelo_id: 1 },
      select: ["filial_id"],
    });

    expect(rsp).toEqual({ filial_id: 1 });
  });

  it("nfSaidaTransferenciaDiario", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaDiario", {
      inicio: "2020-01-01",
      fim: "2020-02-01",
    });

    expect(rsp).toEqual([{ cat1: 10, dia: "2020-01-01" }]);
  });

  it("nfSaidaTransferenciaDiarioSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaDiarioSchema");

    expect(rsp.length).toEqual(7);
  });

  it("nfSaidaTransferenciaMensal", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaMensal", {
      mes: "2020-01",
    });

    expect(rsp).toEqual([{ cat1: 10, mes: "2020-01" }]);
  });

  it("nfSaidaTransferenciaModelo", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaModelo", {
      data: "2020-01-01",
    });

    expect(rsp).toEqual([{ modelo: "prodPlano1", quantidade: 10 }]);
  });

  it("nfSaidaTransferenciaModeloSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaModeloSchema");

    expect(rsp.length).toEqual(2);
  });

  it("nfSaidaTransferenciaMensalSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaTransferenciaMensalSchema");

    expect(rsp.length).toEqual(7);
  });

  it("nfSaidaVendaDiario", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaDiario", {
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

  it("nfSaidaVendaDiarioSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaDiarioSchema");

    expect(rsp.length).toEqual(4);
  });

  it("nfSaidaVendaMensalCliente", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaMensalCliente", {
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

  it("nfSaidaVendaMensalClienteSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaMensalClienteSchema");

    expect(rsp.length).toEqual(5);
  });

  it("nfSaidaVendaAnaliticoSchema", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaAnaliticoSchema");

    expect(rsp.length).toEqual(12);
  });

  it("nfSaidaVendaAnalitico", async () => {
    const rsp = await fetcherRpc.query("nfSaidaVendaAnalitico", {
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
