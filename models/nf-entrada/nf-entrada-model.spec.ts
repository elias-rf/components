import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { modelsMock } from "@/mocks/models.mock";
import { createTracker } from "knex-mock-client";
import { describe, expect, it, vi } from "vitest";

describe("NfEntradaModel", () => {
  const tracker = createTracker(connectionsMock.oftalmo);

  it("list", async () => {
    tracker.reset();
    tracker.on.select("NfMestre").response([{ NroNf: "1" }]);

    const rsp = await modelsMock.nfEntrada.list({
      filter: { nota_id: "1" },
      sort: { nota_id: "asc" },
      select: ["nota_id"],
    });

    expect(rsp).toEqual([{ nota_id: "1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [NroNf] from [NfMestre] where ([NroNf] = @p1) order by [NroNf] asc",
      },
    ]);
  });

  it("read", async () => {
    tracker.reset();
    tracker.on.select("NfMestre").response([{ NroNf: "1" }]);

    const rsp = await modelsMock.nfEntrada.read({
      id: { nota_id: 1 },
      select: ["nota_id"],
    });

    expect(rsp).toEqual({ nota_id: "1" });

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [NroNf] from [NfMestre] where ([NroNf] = @p0)",
      },
    ]);
  });

  it("transferenciaCreate", async () => {
    tracker.reset();
    tracker.on
      .select("tbl_Produto_Item")
      .response([{ kProdutoItem: 2, IdVisiontech: "3 " }]);
    tracker.on.select("tOrdemProducao").response([{ fkProdutoItem: 1 }]);
    tracker.on.select("CadPro").response([{ CdProduto: 1 }]);
    tracker.on
      .select("tOperacaoOrdemProducao")
      .response([{ DataHoraInicio: "2020-01-01 00:00:00" }]);
    tracker.on.select("NfMestre").response([]);
    tracker.on.insert("NfMestre").response([]);
    tracker.on.insert("NFItem").response([]);
    tracker.on.update("Estoque").response([]);
    tracker.on.update("EstatPro").response([]);
    tracker.on.insert("Lotes").response([]);
    tracker.on.insert("NfLogConferencia").response([]);

    const rsp = await modelsMock.nfEntrada.transferenciaCreate({
      controles: ["000001000017"],
    });

    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker, ["sql"])).toEqual([
      {
        sql: "select [fkProdutoItem] from [tOrdemProducao] where ([kOp] = @p0)",
      },
      {
        sql: "select [kProdutoItem] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
      {
        sql: "select [IdVisiontech] from [tbl_Produto_Item] where ([kProdutoItem] = @p0)",
      },
      {
        sql: "select [CdProduto] from [CadPro] where ([CdProduto] = @p0)",
      },
      {
        sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
      },
      {
        sql: "select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where ([fkOperacao] = @p1 and [fkOp] = @p2) order by [DataHoraInicio] desc",
      },
      {
        sql: "select [NroNf] from [NfMestre] where ([CdEmpresa] = @p0 and [NroNf] = @p1 and [Serie] = @p2 and [Modelo] = @p3)",
      },
      {
        sql: "insert into [NfMestre] ([BaseSubstituicao], [CdEmpresa], [CdFornecedor], [ConPag], [DtConferencia], [DtEmi], [DtEntr], [DtValidacao], [FgConferencia], [FgDespesasCompoeBaseICMS], [FgDespesasCompoeBaseIPI], [FgDespesasCompoeTotal], [FgDespesasCompoeVlProdutos], [FgEstoque], [FgFreteCompoeBaseICMS], [FgFreteCompoeBaseIPI], [FgFreteCompoeTotal], [FgFreteCompoeVlProdutos], [FgGNRE], [FgIPICompoeBase], [FgIPICompoeBaseSub], [FgSeguroCompoeBaseICMS], [FgSeguroCompoeBaseIPI], [FgSeguroCompoeTotal], [FgSeguroCompoeVlProdutos], [FgSomaICMSSub], [FgUtilizaPercRedBCIcms], [FgXML], [Frete], [GrupoFiscal], [Horario], [ICMSBasCalc], [ICMSFrete], [ICMSOperPropria], [ICMSRetido], [ICMSVlr], [IPIBasCalc], [IPIFrete], [IPIVlr], [IdParametro], [Modelo], [Nop], [NopFiscal], [NroNf], [NumChaveNfe], [NumNotaRelacionada], [Seguro], [Serie], [SgUsuario], [Tipo], [TotNF], [VlDespAcessorias], [VlMercadorias], [VlNfComplementar], [VlNotaRelacionada], [VlRepasseICMS], [dsObservacao]) output inserted.[CdEmpresa], inserted.[NroNf], inserted.[Serie], inserted.[Modelo], inserted.[CdFornecedor], inserted.[DtEmi], inserted.[DtEntr], inserted.[Nop], inserted.[NopFiscal], inserted.[TotNF], inserted.[BaseSubstituicao], inserted.[IPIBasCalc], inserted.[IPIVlr], inserted.[IPIFrete], inserted.[ICMSAliq], inserted.[ICMSBasCalc], inserted.[ICMSVlr], inserted.[ICMSRetido], inserted.[ICMSOperPropria], inserted.[ICMSFrete], inserted.[Frete], inserted.[Seguro], inserted.[DtValidacao], inserted.[VlMercadorias], inserted.[ConPag], inserted.[Tipo], inserted.[Horario], inserted.[FgIPICompoeBase], inserted.[VlNfComplementar], inserted.[FgIPICompoeBaseSub], inserted.[FgEstoque], inserted.[IdParametro], inserted.[GrupoFiscal], inserted.[FgConferencia], inserted.[VlRepasseICMS], inserted.[FgSomaICMSSub], inserted.[DtConferencia], inserted.[SgUsuario], inserted.[dsObservacao], inserted.[FgUtilizaPercRedBCIcms], inserted.[VlDespAcessorias], inserted.[NumNotaRelacionada], inserted.[VlNotaRelacionada], inserted.[FgDespesasCompoeTotal], inserted.[NumChaveNfe], inserted.[FgXML], inserted.[FgGNRE], inserted.[FgStatusGNRE], inserted.[VlGNRE], inserted.[DtValidacaoNota], inserted.[DtRecolhimentoGNRE], inserted.[IndicadorFormaPgto], inserted.[VlPIS], inserted.[VlCofins], inserted.[VlPISSubstituido], inserted.[VlCofinsSubstituido], inserted.[FgFreteCompoeBaseICMS], inserted.[FgFreteCompoeBaseIPI], inserted.[FgFreteCompoeTotal], inserted.[FgFreteCompoeVlProdutos], inserted.[FgDespesasCompoeBaseICMS], inserted.[FgDespesasCompoeBaseIPI], inserted.[FgDespesasCompoeVlProdutos], inserted.[FgSeguroCompoeVlProdutos], inserted.[FgSeguroCompoeBaseICMS], inserted.[FgSeguroCompoeBaseIPI], inserted.[FgSeguroCompoeTotal], inserted.[NumPedido], inserted.[FgLogEtiquetasLote], inserted.[FgUtilizaVlICMSSTProdutos], inserted.[SituacaoDoc], inserted.[VlDesconto], inserted.[VlFreteConhecTransp], inserted.[NumNotaConhecTransp], inserted.[FgFreteCompoeBasePIS], inserted.[FgFreteCompoeBaseCOFINS], inserted.[VlTotalFCPST], inserted.[FgFCPSTCompoeVlTotalProdutos], inserted.[FgFCPSTCompoeVlTotalNota], inserted.[FgFCPSTCompoeVlCustoProduto] values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20, @p21, @p22, @p23, @p24, @p25, @p26, @p27, @p28, @p29, @p30, @p31, @p32, @p33, @p34, @p35, @p36, @p37, @p38, @p39, @p40, @p41, @p42, @p43, @p44, @p45, @p46, @p47, @p48, @p49, @p50, @p51, @p52, @p53, @p54, @p55, @p56)",
      },
      {
        sql: "insert into [NFItem] ([CdBaseCalculoCreditoPISCOFINS], [CdContribuicaoApuradaPISCOFINS], [CdEmpresa], [CdFornecedor], [CdProduto], [CdTipoCreditoPISCOFINS], [DtEntr], [FgCompoeBaseSub], [FgConferido], [FgCusto], [FgEstoque], [FgEtiqueta], [FgICMSJaRecolhido], [Modelo], [Nop], [NopFiscalItem], [NroNF], [PercIcms], [PercIpi], [PrecPMC], [Quantidade], [Sequencia], [Serie], [TipoMovimentacao], [TipoTributacao], [VlAcrescItem], [VlBaseCalculoICMS], [VlBaseCalculoIPI], [VlBaseSub], [VlBrutoUnitario], [VlDescItem], [VlIcmsSub], [VlLiquidoUnitario], [VlRelacionado], [VlRepasseICMSItem], [VlTotItem], [VlrIcms], [VlrIpi]) output inserted.[CdEmpresa], inserted.[NroNF], inserted.[Serie], inserted.[Modelo], inserted.[CdFornecedor], inserted.[CdProduto], inserted.[FgCusto], inserted.[FgEtiqueta], inserted.[PercIcms], inserted.[PercIpi], inserted.[Quantidade], inserted.[TipoMovimentacao], inserted.[VlAcrescItem], inserted.[VlDescItem], inserted.[VlrIcms], inserted.[VlrIpi], inserted.[VlTotItem], inserted.[TipoTributacao], inserted.[VlBaseSub], inserted.[VlIcmsSub], inserted.[DtEntr], inserted.[FgEstoque], inserted.[VlRepasseICMSItem], inserted.[FgICMSJaRecolhido], inserted.[PrecPMC], inserted.[VlRelacionado], inserted.[FgCompoeBaseSub], inserted.[Nop], inserted.[NopFiscalItem], inserted.[VlBaseCalculoICMS], inserted.[VlBrutoUnitario], inserted.[VlLiquidoUnitario], inserted.[CdBaseCalculoCreditoPISCOFINS], inserted.[CdTipoCreditoPISCOFINS], inserted.[CdContribuicaoApuradaPISCOFINS], inserted.[Sequencia], inserted.[VlBaseCalculoIPI], inserted.[FgConferido] values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20, @p21, @p22, @p23, @p24, @p25, @p26, @p27, @p28, @p29, @p30, @p31, @p32, @p33, @p34, @p35, @p36, @p37)",
      },
      {
        sql: "update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[CdEmpresa], inserted.[CdProduto], inserted.[EstAtual] where ([CdEmpresa] = @p1 and [CdProduto] = @p2)",
      },
      {
        sql: "update [EstatPro] set [QtdCompras] = [QtdCompras] + @p0 output inserted.[CdEmpresa], inserted.[AnoRef], inserted.[MesRef], inserted.[CdProduto], inserted.[EstInicial], inserted.[Entradas], inserted.[Saidas], inserted.[Ajustes], inserted.[QtdCompras], inserted.[QtdMedio], inserted.[QtdVendas], inserted.[VlCusto], inserted.[VlMedio], inserted.[VlVendas], inserted.[VlCustoMedio], inserted.[VlVenda], inserted.[VlAtacado], inserted.[EstInicialPsico] where ([CdEmpresa] = @p1 and [MesRef] = @p2 and [AnoRef] = @p3 and [CdProduto] = @p4)",
      },

      {
        sql: "insert into [Lotes] ([Aspecto], [CdFilial], [CdFornecedor], [CdLote], [CdNRA], [CdProduto], [Densidade], [DtAnalise], [DtEntrada], [DtFabricacao], [DtLimiteUso], [DtValidade], [FatorCorrecao], [Modelo], [NumNfEntrada], [PercentualDiluicao], [QtdeAdquirida], [SaldoPeso], [SerieNfEntrada], [SituacaoLote], [TipoLote]) output inserted.[CdLote], inserted.[CdProduto], inserted.[CdFornecedor], inserted.[CdNRA], inserted.[DtFabricacao], inserted.[DtValidade], inserted.[DtAnalise], inserted.[Aspecto], inserted.[FatorCorrecao], inserted.[Densidade], inserted.[PercentualDiluicao], inserted.[SituacaoLote], inserted.[SerieNfEntrada], inserted.[QtdeAdquirida], inserted.[NumNfEntrada], inserted.[SaldoPeso], inserted.[DtEntrada], inserted.[DtLimiteUso], inserted.[TipoLote], inserted.[IdReduzido], inserted.[CdFilial], inserted.[Modelo] values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20)",
      },
      {
        sql: "insert into [LotesNotaEntrada] ([CdFilial], [CdFornecedor], [CdProduto], [Modelo], [NumLote], [NumNota], [Quantidade], [Serie]) output inserted.[CdFilial], inserted.[NumNota], inserted.[Serie], inserted.[Modelo], inserted.[CdFornecedor], inserted.[CdProduto], inserted.[NumLote], inserted.[Quantidade] values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7)",
      },
      {
        sql: "insert into [NfLogConferencia] ([CdFilial], [CdFornecedor], [Data], [Modelo], [NumNota], [Operacao], [Serie], [Usuario]) output inserted.[CdFilial], inserted.[NumNota], inserted.[Serie], inserted.[CdFornecedor], inserted.[Data], inserted.[Usuario], inserted.[Operacao], inserted.[Modelo] values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7)",
      },
    ]);
    vi.useRealTimers();
  });
});
