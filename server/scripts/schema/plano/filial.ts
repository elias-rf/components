import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Filial extends ModelBase {
  static tableName = "Filial";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  RzSocial!: string;
  NmFilial!: string;
  Endereco!: string;
  Cidade!: string;
  Bairro!: string;
  Uf!: string;
  Cep!: number;
  CGC!: number;
  InscEst!: string;
  Telefone!: string;
  Fax!: string;
  AliqIRRF!: number;
  AliqISS!: number;
  AliqlSS!: number;
  CdClienteAssociado!: number;
  CdFornecAssociado!: number;
  Comissao!: number;
  Diversos!: number;
  CustoFinanceiro!: number;
  Despesas!: number;
  Publicidade!: number;
  TaxaJurosDia!: number;
  DiasCarencia!: number;
  FgBloqueado!: string;
  FgContribuinteFinal!: string;
  FgSubstituicao!: string;
  InscMunicipal!: string;
  NumUltFolhaInventario!: number;
  FgDestaqueImposto!: string;
  Registro!: string;
  Socio!: string;
  CPFsocio!: string;
  AreaAtuacao!: string;
  NumLicencaFuncionamento!: number;
  ResponsavelTecnico!: string;
  CRFRespTecnico!: string;
  AssistenteTecnico!: string;
  CRFAssistTecnico!: string;
  DistritoSanitario!: string;
  CdCidade!: number;
  CdEmpresa!: number;
  FgAtivo!: string;
  FgDeposito!: string;
  Funcionamento!: string;
  PercAtacadoTransf!: number;
  PercPerdaProducao!: number;
  PercMedioImpostoVenda!: number;
  MediaEntrega!: number;
  PercAcrescControlado!: number;
  PercCustoFinanProducao!: number;
  PercMedioComisPJ!: number;
  PercMedioComisPromotor!: number;
  LimiteTaxaEntrega!: number;
  VlTaxaEntrega!: number;
  ModeloNf!: string;
  PercPesoTransferencia!: number;
  MsgPadroPedido!: string;
  MsgClienteContribuinte!: string;
  MsgClienteNaoContribuinte!: string;
  MsgPublicPedido!: string;
  AliqIN381!: number;
  VlMinimoIN381!: number;
  VlMinimoIR!: number;
  PeriodoIR!: string;
  PeriodoIN!: string;
  MsgClienteOptanteSimples!: string;
  FgDeduzISS!: string;
  QtdadeCaracterRodape!: number;
  PercPisEntrada!: number;
  DtInicioCustoMedio!: Date;
  FgTipoEmpresa!: string;
  Email!: string;
  DtUltBloqCli!: Date;
  NumUltLote!: number;
  CPFRespTecnico!: number;
  NumAutorizacaoFuncionamento!: number;
  NumAutorizacaoEspecial!: number;
  FgExibeEstoque!: string;
  CdFilialCentral!: number;
  PercPisEntradaNeutro!: number;
  PercPisEntradaPositivo!: number;
  PercPisEntradaNegativo!: number;
  NumEndereco!: number;
  CompEndereco!: string;
  InscSuframa!: string;
  PercCofinsSaida!: number;
  PercPisSaida!: number;
  FgNFe!: string;
  FgOptanteSimples!: string;
  PercCofinsEntradaNeutro!: number;
  PercCofinsEntradaPositivo!: number;
  PercCofinsEntradaNegativo!: number;
  PercCofinsEntrada!: number;
  EmailProcNfeContador!: string;
  MsgCabecalhoPedido!: string;
  PercMinimoICMSSub!: number;
  CNPJCentralizador!: number;
  IndicadorPeriodoApuracaoIPI!: number;
  FgLogEtiquetaLote!: string;
  PerfilApresArquivoSPED!: string;
  IndicadorTipoAtividade!: string;
  AliquotaNacional12741!: number;
  AliquotaImportado12741!: number;
  IndicadorTipoAtividadePISCofins!: string;
  IndicadorNaturezaPJ!: string;
  IndicadorIncidenciaPISCofins!: string;
  IndicadorApropriacaoPISCofins!: string;
  IndicadorTipoContribuicaoPISCofins!: string;
  CdContribuicaoSocialApurada!: number;
  FgNfeSe!: string;
  CdRegimeEspecialTributacao!: string;
  FgIncentivoCultural!: string;
  CdTributacaoMunicipio!: string;
  CdMunicipioPrestadorServico!: number;
  AliquotaCSLL!: number;
  VlMinimoCSLL!: number;
  CPFAssociado!: number;
  CNAE!: string;
  CdRegimeTributario!: number;
  FgEtiquetaEntrega!: string;
  MsgDeducaoFiscal!: string;
  MsgClienteIsentoICMS!: string;
  AliqINSS!: number;
  FgIsencaoFaixaReceita!: string;
  AliquotaCreditoICMS!: number;
  PercMultaAtraso!: number;
  QtdeDiasProtesto!: number;
  DtUltAvisoLiberacao!: Date;
  FgSetorEntrega!: string;
  FgNFCe!: string;
  FgTributaPartilhaICMS!: string;
  FgPartilhaICMSSomenteNaoPresencial!: string;
  IndIncFisc!: number;
  CListServ!: number;
  EmailNotificacaoNFePendente!: string;
  DtUltNotificacaoNFePendente!: Date;
  FgDistribuicaoEstoque!: string;
  DtLimite!: Date;
  PercMargemMinima!: number;
  FgICMSEfetivo!: string;
  FgRespTecnico!: string;
  FgSTRetidoAnt!: string;
  DiretorioPDFBoletos!: string;
  FgBoletoOnLine!: string;
  ClassificacaoContribuintesIPI!: string;
  FgRE08720!: string;
  DtUltimoProcessamentoRE08720!: Date;
  IdWeb!: number;
  FgPedidoTeleatendimento!: string;
  FgIQVIA!: string;
  FgFidelize!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "RzSocial",
      "NmFilial",
      "Endereco",
      "Cidade",
      "Bairro",
      "Uf",
      "Cep",
      "CGC",
      "InscEst",
      "Telefone",
      "Fax",
      "AliqIRRF",
      "AliqISS",
      "AliqlSS",
      "CdClienteAssociado",
      "CdFornecAssociado",
      "Comissao",
      "Diversos",
      "CustoFinanceiro",
      "Despesas",
      "Publicidade",
      "TaxaJurosDia",
      "DiasCarencia",
      "FgBloqueado",
      "FgContribuinteFinal",
      "FgSubstituicao",
      "InscMunicipal",
      "NumUltFolhaInventario",
      "FgDestaqueImposto",
      "Registro",
      "Socio",
      "CPFsocio",
      "AreaAtuacao",
      "NumLicencaFuncionamento",
      "ResponsavelTecnico",
      "CRFRespTecnico",
      "AssistenteTecnico",
      "CRFAssistTecnico",
      "DistritoSanitario",
      "CdCidade",
      "CdEmpresa",
      "FgAtivo",
      "FgDeposito",
      "Funcionamento",
      "PercAtacadoTransf",
      "PercPerdaProducao",
      "PercMedioImpostoVenda",
      "MediaEntrega",
      "PercAcrescControlado",
      "PercCustoFinanProducao",
      "PercMedioComisPJ",
      "PercMedioComisPromotor",
      "LimiteTaxaEntrega",
      "VlTaxaEntrega",
      "ModeloNf",
      "PercPesoTransferencia",
      "MsgPadroPedido",
      "MsgClienteContribuinte",
      "MsgClienteNaoContribuinte",
      "MsgPublicPedido",
      "AliqIN381",
      "VlMinimoIN381",
      "VlMinimoIR",
      "PeriodoIR",
      "PeriodoIN",
      "MsgClienteOptanteSimples",
      "FgDeduzISS",
      "QtdadeCaracterRodape",
      "PercPisEntrada",
      "DtInicioCustoMedio",
      "FgTipoEmpresa",
      "Email",
      "DtUltBloqCli",
      "NumUltLote",
      "CPFRespTecnico",
      "NumAutorizacaoFuncionamento",
      "NumAutorizacaoEspecial",
      "FgExibeEstoque",
      "CdFilialCentral",
      "PercPisEntradaNeutro",
      "PercPisEntradaPositivo",
      "PercPisEntradaNegativo",
      "NumEndereco",
      "CompEndereco",
      "InscSuframa",
      "PercCofinsSaida",
      "PercPisSaida",
      "FgNFe",
      "FgOptanteSimples",
      "PercCofinsEntradaNeutro",
      "PercCofinsEntradaPositivo",
      "PercCofinsEntradaNegativo",
      "PercCofinsEntrada",
      "EmailProcNfeContador",
      "MsgCabecalhoPedido",
      "PercMinimoICMSSub",
      "CNPJCentralizador",
      "IndicadorPeriodoApuracaoIPI",
      "FgLogEtiquetaLote",
      "PerfilApresArquivoSPED",
      "IndicadorTipoAtividade",
      "AliquotaNacional12741",
      "AliquotaImportado12741",
      "IndicadorTipoAtividadePISCofins",
      "IndicadorNaturezaPJ",
      "IndicadorIncidenciaPISCofins",
      "IndicadorApropriacaoPISCofins",
      "IndicadorTipoContribuicaoPISCofins",
      "CdContribuicaoSocialApurada",
      "FgNfeSe",
      "CdRegimeEspecialTributacao",
      "FgIncentivoCultural",
      "CdTributacaoMunicipio",
      "CdMunicipioPrestadorServico",
      "AliquotaCSLL",
      "VlMinimoCSLL",
      "CPFAssociado",
      "CNAE",
      "CdRegimeTributario",
      "FgEtiquetaEntrega",
      "MsgDeducaoFiscal",
      "MsgClienteIsentoICMS",
      "AliqINSS",
      "FgIsencaoFaixaReceita",
      "AliquotaCreditoICMS",
      "PercMultaAtraso",
      "QtdeDiasProtesto",
      "DtUltAvisoLiberacao",
      "FgSetorEntrega",
      "FgNFCe",
      "FgTributaPartilhaICMS",
      "FgPartilhaICMSSomenteNaoPresencial",
      "IndIncFisc",
      "CListServ",
      "EmailNotificacaoNFePendente",
      "DtUltNotificacaoNFePendente",
      "FgDistribuicaoEstoque",
      "DtLimite",
      "PercMargemMinima",
      "FgICMSEfetivo",
      "FgRespTecnico",
      "FgSTRetidoAnt",
      "DiretorioPDFBoletos",
      "FgBoletoOnLine",
      "ClassificacaoContribuintesIPI",
      "FgRE08720",
      "DtUltimoProcessamentoRE08720",
      "IdWeb",
      "FgPedidoTeleatendimento",
      "FgIQVIA",
      "FgFidelize",
      ];
  }
}

Filial.knex(connections.plano);

export type TFilial = ModelObject<Filial>;
