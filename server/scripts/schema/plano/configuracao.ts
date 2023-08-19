import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Configuracao extends ModelBase {
  static tableName = "Configuracao";
  static idColumn = ["Identificacao"];

  Identificacao!: number;
  ModeloFat!: string;
  ModeloNf!: string;
  EAN!: string;
  CGCCPF!: string;
  TipoCliente!: string;
  TipoLucro!: string;
  VendeConvenio!: string;
  PrecoIndividualizado!: string;
  TaxaSelic!: number;
  TextoNoCodigo!: string;
  TpVdPedido!: string;
  VendaComSerie!: string;
  EtiquetasConvenio!: string;
  DinheiroCR!: string;
  BuscaProdutos!: string;
  CasasDecimais!: number;
  ConversaoMedida!: string;
  Correcao!: string;
  Dinheiro!: string;
  Embalagem!: string;
  ExigeCPF!: string;
  ExtratoCliente!: string;
  FgLiberaLimite!: string;
  FgPreFatura!: string;
  GravaObsNota!: string;
  LancIndividual!: string;
  LancVista!: string;
  NFMestreGrade!: string;
  PedidoMaximo!: string;
  ImpressoraDup!: string;
  ImpressoraFat!: string;
  ImpressoraRecibo!: string;
  PortaDup!: string;
  PortaFat!: string;
  PortaRecibo!: string;
  ImpressoraNF!: string;
  PortaNf!: string;
  ImpressoraBloq!: string;
  PortaBloq!: string;
  ImpressoraEtiq!: string;
  PortaEtiq!: string;
  ImpressoraConv!: string;
  PortaConv!: string;
  ImpressoraCont!: string;
  PortaCont!: string;
  ImpressoraRat!: string;
  PortaRat!: string;
  ImpressoraRes!: string;
  PortaRes!: string;
  ImpressoraPed!: string;
  PortaPed!: string;
  ImpressoraReq!: string;
  PortaReq!: string;
  Assistencia!: string;
  PortaScanner!: number;
  CaminhoBackup!: string;
  Caminho!: string;
  DtCompactacao!: Date;
  TeclaAbertura!: number;
  RelCustoMedio!: string;
  FgControlaEstoquePedido!: string;
  CasasDecimaisQtde!: number;
  FgIcmsCusto!: string;
  ModalidadesPagto!: string;
  FgFilialFinanc!: string;
  ImpressoraGarantia!: string;
  PortaGarantia!: string;
  DescEspecifica!: string;
  QtdeItensNF!: number;
  FgObrigaLctoBancarioCR!: string;
  FgExigeComentarioCR!: string;
  FgObrigatorioCP!: string;
  FgGravaEvento!: string;
  MoedaEspecifica!: string;
  ModeloPedido!: string;
  AltComponentesKit!: string;
  FgLancFinanceiroTransf!: string;
  FgAutorizacaoRemota!: string;
  FgVendaKit!: string;
  FgExibeEstoqueNF!: string;
  FgBloqueioEstoqueNegativo!: string;
  FgSenhaMaster!: string;
  FgAltNumNota!: string;
  FgPrecoNoFechamento!: string;
  FgOrdenaPedido!: string;
  FgReservaPedido!: string;
  FgBloqueioEstoqueNegativoPed!: string;
  DtUltLimpeza!: Date;
  DiasTitCobrDinheiro!: number;
  DiasPedidos!: number;
  DiasCaixa!: number;
  DiasLog!: number;
  TipoCusto!: string;
  FgParametrosMovFiscal!: string;
  IniciaisCriacaoEAN!: number;
  FgTrocaTipoVenda!: string;
  DecimaisCusto!: number;
  FgColetor!: string;
  FgImpTermoResponsabilidade!: string;
  CRMCoringa!: string;
  FgDetalhaPagamento!: string;
  FgAlteraPgtoPDV!: string;
  FgCRMObrigatorio!: string;
  FgComissaoExtra!: string;
  FgGravaExclusaoLimpeza!: string;
  FgAssociaFornecedor!: string;
  FgControleLotes!: string;
  FgCEP!: string;
  FgDiasSemEstoque!: string;
  FgBloqueioCreditoPedido!: string;
  FgLivredigPedido!: string;
  FgBloqueioEstoqueNegativoPdv!: string;
  FgControlaCredito!: string;
  FgClienteInicioPedido!: string;
  FgRedutorComissao!: string;
  FgAgendamento!: string;
  FgPreVenda!: string;
  FgObrigatorioMidia!: string;
  FgSugereNop!: string;
  FgSelecaoProdutoFaixaPreco!: string;
  FgSelecaoProdutoFaixaEstoque!: string;
  FgPametrosCustoProduto!: string;
  FgCustoAlternativoProduto!: string;
  CdDepartamentoPadrao!: number;
  CdCategoriaPadrao!: number;
  FgMontagemGrade!: string;
  FgRedeAssistencia!: string;
  FgProdutoSegmentoCliente!: string;
  FgProdutosRelacionados!: string;
  FgProdutosEquivalentes!: string;
  CaminhoExportVMS!: string;
  CaminhoImportVMS!: string;
  FgFidelidade!: string;
  CdCategPadrao!: string;
  FgVendaClienteInativo!: string;
  FgTrocaPgtosCupom!: string;
  FgImprimeLinhasAdicionais!: string;
  FgCancelaCRECF!: string;
  PercVendaEspecial!: number;
  FgObrigaPercLucro!: string;
  FgDifNfEntrada!: string;
  FgTrocaFilialPDV!: string;
  FgExibeUltPedidos!: string;
  MesesPedido!: number;
  FgSenhaAbaixoCustoPed!: string;
  FgControlaEnvelopes!: string;
  FgAlertaVlTabela!: string;
  FgImprimeItensKit!: string;
  FgCarregaItemKit!: string;
  FgConfereCliente!: string;
  FgTeleEntrega!: string;
  FgCancelaCRENF!: string;
  FgAutorizacaoIndividual!: string;
  FgConfereLotes!: string;
  FgCNPJObrigatorio!: string;
  FgInscEstObrigatorio!: string;
  FgVidalink!: string;
  FgObrigaRGPsico!: string;
  CaminhoVidalink!: string;
  DiasCarenciaBloqCredito!: number;
  DtUltBloqueio!: Date;
  FgDataEntregaPedido!: string;
  FgSeparacaoPedido!: string;
  ExibeItensSelPedido!: string;
  NumLoteOP!: string;
  FgConferePedido!: string;
  FgReabrePedido!: string;
  FgAtualizaDataOrc!: string;
  FgExibeEstPedido!: string;
  FgDuplicaItensPedido!: string;
  FgPedidoAgenda!: string;
  FgTrocaOperadorCaixa!: string;
  FgTrocaTipoDocumentoBaixaCR!: string;
  FgEfetuaBaixaExtrato!: string;
  FgComissaoItem!: string;
  FgLoteObrigatorioOP!: string;
  FgPedSaidaSugestao!: string;
  FgPedEntradaSugestao!: string;
  FgDescontoPgto!: string;
  FgProducaoParcial!: string;
  CaminhoePharma!: string;
  FgBloqueiaCliente!: string;
  FgCalculoAutomatico!: string;
  QtdeMeses!: number;
  Multiplicador!: number;
  FgMultiplasNOP!: string;
  FgClienteImpressaoNF!: string;
  FgObrigaDadosPedido!: string;
  MsgPedidoCompra!: string;
  FgAtendeParcialSaida!: string;
  FgImprimeContatoPedidoEntrada!: string;
  FgImprimeMsgPublicitaria!: string;
  FgImprimeCdReferencia!: string;
  FgImpCdProdPedidoModDesc!: string;
  FgImprimeDescricaoCompleta!: string;
  FgImprimeDataHoraNF!: string;
  FgAtualizaStatusPedido!: string;
  FgConsideraTaxaEntregaComoFrete!: string;
  FgImpLinhaSeparadora!: string;
  FgDadosCadastrais!: string;
  FgPotencialCompra!: string;
  FgObrigaLctoBancarioCP!: string;
  FgNFe!: string;
  FgSenhaGerEmiOrc!: string;
  DtFechamentoPeriodo!: Date;
  FgDevolucaoControlado!: string;
  FgEmissaoChequeFornecedor!: string;
  FgRecalculoCliente!: string;
  FgRedutorComissaoItem!: string;
  FgPromocaoManual!: string;
  FgVlLiquidoSelProduto!: string;
  FgPlanoContas!: string;
  FgLiberaDescOrcamento!: string;
  ExibeEstoqueItensPedido!: string;
  FgAlteraClienteNF!: string;
  FgDestacaFaltaEstoquePed!: string;
  QtdeCaracteresObsNota!: number;
  FgExibeEstoqueFiliaisSelecao!: string;
  FgBloqueiotroco!: string;
  FgFechamentoDinheiro!: string;
  FgPermiteInativoOrcamentos!: string;
  FgAlteraDescricaoProduto!: string;
  CstIPI!: string;
  CstPIS!: string;
  CstCOFINS!: string;
  CaminhoNFe!: string;
  CertificadoNFe!: string;
  UsuarioNFe!: string;
  SenhaNFe!: string;
  ProxyNFe!: string;
  LicencaNFe!: string;
  Quantidade!: number;
  ConfLib!: string;
  QtdeLimite!: number;
  FgPreVendaSimplificada!: string;
  FgSelecaoInformacaoAdicional!: string;
  FonteMediaImposto!: string;
  FgMantemDigitacaoDescricao!: string;
  FgExibeEstOrcamento!: string;
  FgConsisteInscricao!: string;
  FgImprimeComprovanteMovCredito!: string;
  FgConfereLoteIndividual!: string;
  FgPedidoOrdemFaturamento!: string;
  FonteCodigoBarraBoleto!: string;
  FgHistoricoSTEntrada!: string;
  FgMostraDRE!: string;
  MsgCondFornecimento!: string;
  FgBloqueiaCreditoCliente!: string;
  FgDemonstraCustoPreVenda!: string;
  FgDemonstraPedidoEntradaPreVenda!: string;
  CdClientePadraoVidalink!: number;
  CdVendedorPadraoVidalink!: number;
  FgRecuperacaoST!: string;
  FgManutencaoGNRE!: string;
  FgVendaConsultorio!: string;
  FgAlteraCPBaixado!: string;
  FgEnviarPFIMS!: string;
  FgControlarChequesTerceiros!: string;
  FgDuplicaBaixaCR!: string;
  FgBalancaCaminhao!: string;
  FgSomenteClientesVendedor!: string;
  FgLctoFinanceiroOutrasFormas!: string;
  FgDespesasPedido!: string;
  FgPharmaLink!: string;
  FgCalculoImpostoLitros!: string;
  FgObrigaNCMProduto!: string;
  FgObrigaDadosNFeCliente!: string;
  FgDetalhaCartao!: string;
  FgVencimentoTituloDiaUtil!: string;
  FgBaixaAgrupadaSemJuros!: string;
  FgImprimeEnderecoPrateleira!: string;
  SerieSelecaoInicial!: string;
  SerieSelecaoFinal!: string;
  FgAlertaAniversariantes!: string;
  FgFreteCompoeCalculoCustoMedio!: string;
  FgImprimeObsPedidoInfComplementar!: string;
  FgCancelaNotaPedido!: string;
  FgGeraArquivoSerasa!: string;
  FgEstornoDtRecebimento!: string;
  FgBloqueioVendaInadimplentes!: string;
  FgObrigaCESTProduto!: string;
  FgChequeCompensarLimiteCredito!: string;
  FgPrecoCliente!: string;
  FgBloqueiaCadastroClienteCpfCnpj!: string;
  FgApresentaAbaMeta!: string;
  FgVendaMestreGrade!: string;
  FgBuscaCdProdutoXML!: string;
  FgBloqueioVendaProdutoFilial!: string;
  FgViaUnicaPreVendaSimplificada!: string;
  FgCobBancTipoDocumento!: string;
  FgBloqueiaLancamentoRetroativo!: string;
  FgCodigoAuxiliarProduto!: string;
  FgBuscaAssocXML!: string;
  FgConciliaCNPJImportXML!: string;
  FgPrecoFabricaCompras!: string;
  FgApresentaValorDinheiroSangria!: string;
  FgApresentaPesoBruto!: string;
  FgSomenteAssocForn!: string;
  FgPraticaPrecoAtacadoQtde!: string;
  IdRelease!: string;
  FgConsideraCdInterno!: string;
  FgDiferencaUTrib!: string;
  FgComanda!: string;
  FgMultiplosPedidosNFe!: string;
  DtIniCustoMedioDev!: Date;
  FgOrdemServico!: string;
  FgTicketVale!: string;
  DiasContraVale!: number;
  FgDevolucaoSimplificada!: string;
  FgImpComplemento!: string;
  IdCSRT!: string;
  CSRT!: string;
  MascaraPlanoContas1!: number;
  MascaraPlanoContas2!: number;
  MascaraPlanoContas3!: number;
  MascaraPlanoContas4!: number;
  MascaraPlanoContas5!: number;
  MascaraPlanoContas6!: number;
  MascaraPlanoContas7!: number;
  DtUltimoBackup!: Date;
  DtUltimaNotificacaoBackup!: Date;
  NumDiasNotificacaoBackup!: number;
  FgDiferencaUTribSomenteUFEX!: string;
  DiasHistorico!: number;
  PercRecompensa!: number;
  FgClubeCompras!: string;
  FgOrdemSeparacao!: string;
  FgEnderecoEntrega!: string;
  MesesXML!: number;
  FgPlanoContasObrigatorio!: string;
  

  static getFields() {
    return [
      "Identificacao",
      "ModeloFat",
      "ModeloNf",
      "EAN",
      "CGCCPF",
      "TipoCliente",
      "TipoLucro",
      "VendeConvenio",
      "PrecoIndividualizado",
      "TaxaSelic",
      "TextoNoCodigo",
      "TpVdPedido",
      "VendaComSerie",
      "EtiquetasConvenio",
      "DinheiroCR",
      "BuscaProdutos",
      "CasasDecimais",
      "ConversaoMedida",
      "Correcao",
      "Dinheiro",
      "Embalagem",
      "ExigeCPF",
      "ExtratoCliente",
      "FgLiberaLimite",
      "FgPreFatura",
      "GravaObsNota",
      "LancIndividual",
      "LancVista",
      "NFMestreGrade",
      "PedidoMaximo",
      "ImpressoraDup",
      "ImpressoraFat",
      "ImpressoraRecibo",
      "PortaDup",
      "PortaFat",
      "PortaRecibo",
      "ImpressoraNF",
      "PortaNf",
      "ImpressoraBloq",
      "PortaBloq",
      "ImpressoraEtiq",
      "PortaEtiq",
      "ImpressoraConv",
      "PortaConv",
      "ImpressoraCont",
      "PortaCont",
      "ImpressoraRat",
      "PortaRat",
      "ImpressoraRes",
      "PortaRes",
      "ImpressoraPed",
      "PortaPed",
      "ImpressoraReq",
      "PortaReq",
      "Assistencia",
      "PortaScanner",
      "CaminhoBackup",
      "Caminho",
      "DtCompactacao",
      "TeclaAbertura",
      "RelCustoMedio",
      "FgControlaEstoquePedido",
      "CasasDecimaisQtde",
      "FgIcmsCusto",
      "ModalidadesPagto",
      "FgFilialFinanc",
      "ImpressoraGarantia",
      "PortaGarantia",
      "DescEspecifica",
      "QtdeItensNF",
      "FgObrigaLctoBancarioCR",
      "FgExigeComentarioCR",
      "FgObrigatorioCP",
      "FgGravaEvento",
      "MoedaEspecifica",
      "ModeloPedido",
      "AltComponentesKit",
      "FgLancFinanceiroTransf",
      "FgAutorizacaoRemota",
      "FgVendaKit",
      "FgExibeEstoqueNF",
      "FgBloqueioEstoqueNegativo",
      "FgSenhaMaster",
      "FgAltNumNota",
      "FgPrecoNoFechamento",
      "FgOrdenaPedido",
      "FgReservaPedido",
      "FgBloqueioEstoqueNegativoPed",
      "DtUltLimpeza",
      "DiasTitCobrDinheiro",
      "DiasPedidos",
      "DiasCaixa",
      "DiasLog",
      "TipoCusto",
      "FgParametrosMovFiscal",
      "IniciaisCriacaoEAN",
      "FgTrocaTipoVenda",
      "DecimaisCusto",
      "FgColetor",
      "FgImpTermoResponsabilidade",
      "CRMCoringa",
      "FgDetalhaPagamento",
      "FgAlteraPgtoPDV",
      "FgCRMObrigatorio",
      "FgComissaoExtra",
      "FgGravaExclusaoLimpeza",
      "FgAssociaFornecedor",
      "FgControleLotes",
      "FgCEP",
      "FgDiasSemEstoque",
      "FgBloqueioCreditoPedido",
      "FgLivredigPedido",
      "FgBloqueioEstoqueNegativoPdv",
      "FgControlaCredito",
      "FgClienteInicioPedido",
      "FgRedutorComissao",
      "FgAgendamento",
      "FgPreVenda",
      "FgObrigatorioMidia",
      "FgSugereNop",
      "FgSelecaoProdutoFaixaPreco",
      "FgSelecaoProdutoFaixaEstoque",
      "FgPametrosCustoProduto",
      "FgCustoAlternativoProduto",
      "CdDepartamentoPadrao",
      "CdCategoriaPadrao",
      "FgMontagemGrade",
      "FgRedeAssistencia",
      "FgProdutoSegmentoCliente",
      "FgProdutosRelacionados",
      "FgProdutosEquivalentes",
      "CaminhoExportVMS",
      "CaminhoImportVMS",
      "FgFidelidade",
      "CdCategPadrao",
      "FgVendaClienteInativo",
      "FgTrocaPgtosCupom",
      "FgImprimeLinhasAdicionais",
      "FgCancelaCRECF",
      "PercVendaEspecial",
      "FgObrigaPercLucro",
      "FgDifNfEntrada",
      "FgTrocaFilialPDV",
      "FgExibeUltPedidos",
      "MesesPedido",
      "FgSenhaAbaixoCustoPed",
      "FgControlaEnvelopes",
      "FgAlertaVlTabela",
      "FgImprimeItensKit",
      "FgCarregaItemKit",
      "FgConfereCliente",
      "FgTeleEntrega",
      "FgCancelaCRENF",
      "FgAutorizacaoIndividual",
      "FgConfereLotes",
      "FgCNPJObrigatorio",
      "FgInscEstObrigatorio",
      "FgVidalink",
      "FgObrigaRGPsico",
      "CaminhoVidalink",
      "DiasCarenciaBloqCredito",
      "DtUltBloqueio",
      "FgDataEntregaPedido",
      "FgSeparacaoPedido",
      "ExibeItensSelPedido",
      "NumLoteOP",
      "FgConferePedido",
      "FgReabrePedido",
      "FgAtualizaDataOrc",
      "FgExibeEstPedido",
      "FgDuplicaItensPedido",
      "FgPedidoAgenda",
      "FgTrocaOperadorCaixa",
      "FgTrocaTipoDocumentoBaixaCR",
      "FgEfetuaBaixaExtrato",
      "FgComissaoItem",
      "FgLoteObrigatorioOP",
      "FgPedSaidaSugestao",
      "FgPedEntradaSugestao",
      "FgDescontoPgto",
      "FgProducaoParcial",
      "CaminhoePharma",
      "FgBloqueiaCliente",
      "FgCalculoAutomatico",
      "QtdeMeses",
      "Multiplicador",
      "FgMultiplasNOP",
      "FgClienteImpressaoNF",
      "FgObrigaDadosPedido",
      "MsgPedidoCompra",
      "FgAtendeParcialSaida",
      "FgImprimeContatoPedidoEntrada",
      "FgImprimeMsgPublicitaria",
      "FgImprimeCdReferencia",
      "FgImpCdProdPedidoModDesc",
      "FgImprimeDescricaoCompleta",
      "FgImprimeDataHoraNF",
      "FgAtualizaStatusPedido",
      "FgConsideraTaxaEntregaComoFrete",
      "FgImpLinhaSeparadora",
      "FgDadosCadastrais",
      "FgPotencialCompra",
      "FgObrigaLctoBancarioCP",
      "FgNFe",
      "FgSenhaGerEmiOrc",
      "DtFechamentoPeriodo",
      "FgDevolucaoControlado",
      "FgEmissaoChequeFornecedor",
      "FgRecalculoCliente",
      "FgRedutorComissaoItem",
      "FgPromocaoManual",
      "FgVlLiquidoSelProduto",
      "FgPlanoContas",
      "FgLiberaDescOrcamento",
      "ExibeEstoqueItensPedido",
      "FgAlteraClienteNF",
      "FgDestacaFaltaEstoquePed",
      "QtdeCaracteresObsNota",
      "FgExibeEstoqueFiliaisSelecao",
      "FgBloqueiotroco",
      "FgFechamentoDinheiro",
      "FgPermiteInativoOrcamentos",
      "FgAlteraDescricaoProduto",
      "CstIPI",
      "CstPIS",
      "CstCOFINS",
      "CaminhoNFe",
      "CertificadoNFe",
      "UsuarioNFe",
      "SenhaNFe",
      "ProxyNFe",
      "LicencaNFe",
      "Quantidade",
      "ConfLib",
      "QtdeLimite",
      "FgPreVendaSimplificada",
      "FgSelecaoInformacaoAdicional",
      "FonteMediaImposto",
      "FgMantemDigitacaoDescricao",
      "FgExibeEstOrcamento",
      "FgConsisteInscricao",
      "FgImprimeComprovanteMovCredito",
      "FgConfereLoteIndividual",
      "FgPedidoOrdemFaturamento",
      "FonteCodigoBarraBoleto",
      "FgHistoricoSTEntrada",
      "FgMostraDRE",
      "MsgCondFornecimento",
      "FgBloqueiaCreditoCliente",
      "FgDemonstraCustoPreVenda",
      "FgDemonstraPedidoEntradaPreVenda",
      "CdClientePadraoVidalink",
      "CdVendedorPadraoVidalink",
      "FgRecuperacaoST",
      "FgManutencaoGNRE",
      "FgVendaConsultorio",
      "FgAlteraCPBaixado",
      "FgEnviarPFIMS",
      "FgControlarChequesTerceiros",
      "FgDuplicaBaixaCR",
      "FgBalancaCaminhao",
      "FgSomenteClientesVendedor",
      "FgLctoFinanceiroOutrasFormas",
      "FgDespesasPedido",
      "FgPharmaLink",
      "FgCalculoImpostoLitros",
      "FgObrigaNCMProduto",
      "FgObrigaDadosNFeCliente",
      "FgDetalhaCartao",
      "FgVencimentoTituloDiaUtil",
      "FgBaixaAgrupadaSemJuros",
      "FgImprimeEnderecoPrateleira",
      "SerieSelecaoInicial",
      "SerieSelecaoFinal",
      "FgAlertaAniversariantes",
      "FgFreteCompoeCalculoCustoMedio",
      "FgImprimeObsPedidoInfComplementar",
      "FgCancelaNotaPedido",
      "FgGeraArquivoSerasa",
      "FgEstornoDtRecebimento",
      "FgBloqueioVendaInadimplentes",
      "FgObrigaCESTProduto",
      "FgChequeCompensarLimiteCredito",
      "FgPrecoCliente",
      "FgBloqueiaCadastroClienteCpfCnpj",
      "FgApresentaAbaMeta",
      "FgVendaMestreGrade",
      "FgBuscaCdProdutoXML",
      "FgBloqueioVendaProdutoFilial",
      "FgViaUnicaPreVendaSimplificada",
      "FgCobBancTipoDocumento",
      "FgBloqueiaLancamentoRetroativo",
      "FgCodigoAuxiliarProduto",
      "FgBuscaAssocXML",
      "FgConciliaCNPJImportXML",
      "FgPrecoFabricaCompras",
      "FgApresentaValorDinheiroSangria",
      "FgApresentaPesoBruto",
      "FgSomenteAssocForn",
      "FgPraticaPrecoAtacadoQtde",
      "IdRelease",
      "FgConsideraCdInterno",
      "FgDiferencaUTrib",
      "FgComanda",
      "FgMultiplosPedidosNFe",
      "DtIniCustoMedioDev",
      "FgOrdemServico",
      "FgTicketVale",
      "DiasContraVale",
      "FgDevolucaoSimplificada",
      "FgImpComplemento",
      "IdCSRT",
      "CSRT",
      "MascaraPlanoContas1",
      "MascaraPlanoContas2",
      "MascaraPlanoContas3",
      "MascaraPlanoContas4",
      "MascaraPlanoContas5",
      "MascaraPlanoContas6",
      "MascaraPlanoContas7",
      "DtUltimoBackup",
      "DtUltimaNotificacaoBackup",
      "NumDiasNotificacaoBackup",
      "FgDiferencaUTribSomenteUFEX",
      "DiasHistorico",
      "PercRecompensa",
      "FgClubeCompras",
      "FgOrdemSeparacao",
      "FgEnderecoEntrega",
      "MesesXML",
      "FgPlanoContasObrigatorio",
      ];
  }
}

Configuracao.knex(connections.plano);

export type TConfiguracao = ModelObject<Configuracao>;
