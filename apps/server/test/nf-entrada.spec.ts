import knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { app } from "../src/app";
import { apiRequest, rpcResponse } from "./aux";

describe("nfEntrada", () => {
  let tracker: Tracker;
  vi.mock("../src/dal/connections", () => ({
    connections: {
      plano: knex({ client: MockClient }),
      oftalmo: knex({ client: MockClient }),
      fullvision: knex({ client: MockClient }),
    },
  }));

  beforeAll(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  it("nfEntradaSchema", async () => {
    const rsp = await apiRequest(app, "nfEntradaSchema", {});
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(expect.any(Array)));
  });

  it("nfEntradaRead", async () => {
    tracker.on.select("NfMestre").response([]);
    const rsp = await apiRequest(app, "nfEntradaRead", {
      id: { nota_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse({}));
    expect(tracker.history.select.length).toEqual(1);
    expect(tracker.history.select[0].bindings).toEqual(["171"]);
    expect(tracker.history.select[0].sql).toEqual(
      `select "CdEmpresa", "NroNf", "Serie", "Modelo", "CdFornecedor", "DtEmi", "DtEntr", "Nop", "NopFiscal", "TotNF", "BaseSubstituicao", "IPIBasCalc", "IPIVlr", "IPIFrete", "ICMSAliq", "ICMSBasCalc", "ICMSVlr", "ICMSRetido", "ICMSOperPropria", "ICMSFrete", "Frete", "Seguro", "DtValidacao", "VlMercadorias", "ConPag", "Tipo", "Horario", "FgIPICompoeBase", "VlNfComplementar", "FgIPICompoeBaseSub", "FgEstoque", "IdParametro", "GrupoFiscal", "FgConferencia", "VlRepasseICMS", "FgSomaICMSSub", "DtConferencia", "SgUsuario", "dsObservacao", "FgUtilizaPercRedBCIcms", "VlDespAcessorias", "NumNotaRelacionada", "VlNotaRelacionada", "FgDespesasCompoeTotal", "NumChaveNfe", "FgXML", "FgGNRE", "FgStatusGNRE", "VlGNRE", "DtValidacaoNota", "DtRecolhimentoGNRE", "IndicadorFormaPgto", "VlPIS", "VlCofins", "VlPISSubstituido", "VlCofinsSubstituido", "FgFreteCompoeBaseICMS", "FgFreteCompoeBaseIPI", "FgFreteCompoeTotal", "FgFreteCompoeVlProdutos", "FgDespesasCompoeBaseICMS", "FgDespesasCompoeBaseIPI", "FgDespesasCompoeVlProdutos", "FgSeguroCompoeVlProdutos", "FgSeguroCompoeBaseICMS", "FgSeguroCompoeBaseIPI", "FgSeguroCompoeTotal", "NumPedido", "FgLogEtiquetasLote", "FgUtilizaVlICMSSTProdutos", "SituacaoDoc", "VlDesconto", "VlFreteConhecTransp", "NumNotaConhecTransp", "FgFreteCompoeBasePIS", "FgFreteCompoeBaseCOFINS", "VlTotalFCPST", "FgFCPSTCompoeVlTotalProdutos", "FgFCPSTCompoeVlTotalNota", "FgFCPSTCompoeVlCustoProduto" from "NfMestre" where "NroNf" = ?`
    );
  });

  it("nfEntradaList", async () => {
    tracker.on.select("NfMestre").response([]);
    const rsp = await apiRequest(app, "nfEntradaList", {
      where: [["nota_id", "=", "171"]],
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse([]));
  });

  it("nfEntradaDel", async () => {
    tracker.on.delete("NfMestre").response(1);
    const rsp = await apiRequest(app, "nfEntradaDel", {
      id: { nota_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(1));
  });

  it("nfEntradaCreate", async () => {
    tracker.on.any("NfMestre").response([]);
    const rsp = await apiRequest(app, "nfEntradaCreate", {
      data: { nota_id: "171" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(null));
  });

  it("nfEntradaUpdate", async () => {
    tracker.on.any("NfMestre").response([]);
    const rsp = await apiRequest(app, "nfEntradaUpdate", {
      id: { nota_id: "171" },
      data: { nota_id: "172" },
    });
    expect(rsp.status).toEqual(200);
    expect(rsp.body).toEqual(rpcResponse(null));
  });

  it.skip("nfEntradaTransferenciaCreate", async () => {
    tracker.on.any("NfMestre").response([]);
    const rsp = await apiRequest(app, "nfEntradaTransferenciaCreate", {
      controles: ["180076000124", "180076000033"],
    });
    expect(rsp.status).toEqual(200);
    console.log(rsp.body);
    expect(rsp.body).toEqual(rpcResponse(null));
  });
});
