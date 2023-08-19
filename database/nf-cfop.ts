import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class NfCfop extends ModelBase {
  static tableName = "NatOpe";
  static idColumn = ["Nop"];

  Cartao!: string;
  Cheque!: string;
  Correcao!: string;
  Crediario!: string;
  Dinheiro!: string;
  Estatistica!: string;
  Estoque!: string;
  ICMS!: string;
  ICMSCupom!: string;
  IPI!: string;
  Nop!: number;
  ObsComplementar!: string;
  OutrasFormas!: string;
  PrecoCusto!: string;
  PrecoVenda!: string;
  SomaDisp!: string;
  TradicaoFutura!: string;
  Tributacao!: string;
  FreteBaseTotal!: string;
  FreteTotal!: string;
  OperTransferencia!: string;
  TipoMovimentacao!: string;
  TipoOperacao!: string;
  FgImportacao!: string;
  FgControlaPsico!: string;
  FgFicha26!: string;
  PercDescAutomatico!: number;
  FgAtivo!: string;
  FgSomaIcms!: string;
  FgConhecimentodeTransporte!: string;
  Descricao!: string;
  FgRemessaIndustrializacao!: string;
  DescricaoNovo!: string;
  FgAlteraCustoMedio!: string;
  FgCupomFiscal!: string;
  FgPerdaPsico!: string;
  MotivoPerdaPsico!: number;
  FgSintegraZeraVlProdutos!: string;
  FgSintegraZeraVlTotal!: string;
  FgSintegraZeraBaseCalculoICMS!: string;
  FgSintegraZeraVlICMS!: string;
  ObsComplementar1!: string;
  ObsComplementar2!: string;
  ObsComplementar3!: string;
  ObsComplementar4!: string;
  FgDemonstracao!: string;
  SituacaoTributaria!: number;
  FgSubstituicaoTributaria!: string;
  FgSomaIPIBaseSub!: string;
  FgSomaFreteBaseSub!: string;
  FgDetalhaCombustivel!: string;
  FgDestacaISS!: string;
  FgICMSDiferimentoTotal!: string;
  FgGeraCusto!: string;
  FgGeraReceita!: string;
  CSTICMSSugerida!: string;
  CSTIPISugerida!: string;
  CSTPISSugerida!: string;
  CSTCofinsSugerida!: string;
  FgGeraCreditoICMS!: string;
  FgICMSSobreFrete!: string;
  FgIPISobreFrete!: string;
  CdTipoCredito!: number;
  CdBaseCalculoCredito!: number;
  FgPISSobreFrete!: string;
  FgCOFINSSobreFrete!: string;
  FgDeduzICMSCustoMedio!: string;
  FgDestacaPIS!: string;
  FgDestacaCOFINS!: string;
  FgServico!: string;
  FgDestacaICMSConsumidor!: string;
  FgDestacaIPIConsumidor!: string;
  FgDestacaPISConsumidor!: string;
  FgDestacaCOFINSConsumidor!: string;
  FgDestacaICMSCupomConsumidor!: string;
  FgSomaIPIBaseICMSConsumidor!: string;
  FgSomaIPIBaseICMSSubConsumidor!: string;
  FgSomaDespesasBaseICMSConsumidor!: string;
  FgSomaFreteBaseICMSConsumidor!: string;
  FgSomaFreteBaseICMSSubConsumidor!: string;
  FgSomaFreteBaseIPIConsumidor!: string;
  FgSomaFreteTotalNotaConsumidor!: string;
  FgICMSCobradoAnteriormenteST!: string;
  FgICMSNaoTribSimplesNac!: string;
  FgSomaIPIContribuinte!: string;
  FgSomaIPINaoContribuinte!: string;
  FgPgtoDepositoBancario!: string;
  FgPgtoFinanciamento!: string;
  FgPgtoCreditoCliente!: string;
  FgRecuperacaoST!: string;
  FgSPEDZeraBaseCalculoICMS!: string;
  FgSPEDZeraVlICMS!: string;
  FgSPEDZeraBaseCalculoIPI!: string;
  FgSPEDZeraVlIPI!: string;
  FgSPEDZeraBaseCalculoICMSSub!: string;
  FgSPEDZeraVlICMSSub!: string;
  FgEmprestimo!: string;
  FgBonificacao!: string;
  FgReceberNoLocal!: string;
  FgGeraRemessaWMS!: string;
  FgSomaIPIFreteBaseICMSConsumidor!: string;
  FgAnulaSugestao!: string;
  FgDevolucaoRelCaixa!: string;
  FgDeduzICMSBCPISCOFINS!: string;
  FgPgtoPIX!: string;

  static getFields() {
    return [
      "Cartao",
      "Cheque",
      "Correcao",
      "Crediario",
      "Dinheiro",
      "Estatistica",
      "Estoque",
      "ICMS",
      "ICMSCupom",
      "IPI",
      "Nop",
      "ObsComplementar",
      "OutrasFormas",
      "PrecoCusto",
      "PrecoVenda",
      "SomaDisp",
      "TradicaoFutura",
      "Tributacao",
      "FreteBaseTotal",
      "FreteTotal",
      "OperTransferencia",
      "TipoMovimentacao",
      "TipoOperacao",
      "FgImportacao",
      "FgControlaPsico",
      "FgFicha26",
      "PercDescAutomatico",
      "FgAtivo",
      "FgSomaIcms",
      "FgConhecimentodeTransporte",
      "Descricao",
      "FgRemessaIndustrializacao",
      "DescricaoNovo",
      "FgAlteraCustoMedio",
      "FgCupomFiscal",
      "FgPerdaPsico",
      "MotivoPerdaPsico",
      "FgSintegraZeraVlProdutos",
      "FgSintegraZeraVlTotal",
      "FgSintegraZeraBaseCalculoICMS",
      "FgSintegraZeraVlICMS",
      "ObsComplementar1",
      "ObsComplementar2",
      "ObsComplementar3",
      "ObsComplementar4",
      "FgDemonstracao",
      "SituacaoTributaria",
      "FgSubstituicaoTributaria",
      "FgSomaIPIBaseSub",
      "FgSomaFreteBaseSub",
      "FgDetalhaCombustivel",
      "FgDestacaISS",
      "FgICMSDiferimentoTotal",
      "FgGeraCusto",
      "FgGeraReceita",
      "CSTICMSSugerida",
      "CSTIPISugerida",
      "CSTPISSugerida",
      "CSTCofinsSugerida",
      "FgGeraCreditoICMS",
      "FgICMSSobreFrete",
      "FgIPISobreFrete",
      "CdTipoCredito",
      "CdBaseCalculoCredito",
      "FgPISSobreFrete",
      "FgCOFINSSobreFrete",
      "FgDeduzICMSCustoMedio",
      "FgDestacaPIS",
      "FgDestacaCOFINS",
      "FgServico",
      "FgDestacaICMSConsumidor",
      "FgDestacaIPIConsumidor",
      "FgDestacaPISConsumidor",
      "FgDestacaCOFINSConsumidor",
      "FgDestacaICMSCupomConsumidor",
      "FgSomaIPIBaseICMSConsumidor",
      "FgSomaIPIBaseICMSSubConsumidor",
      "FgSomaDespesasBaseICMSConsumidor",
      "FgSomaFreteBaseICMSConsumidor",
      "FgSomaFreteBaseICMSSubConsumidor",
      "FgSomaFreteBaseIPIConsumidor",
      "FgSomaFreteTotalNotaConsumidor",
      "FgICMSCobradoAnteriormenteST",
      "FgICMSNaoTribSimplesNac",
      "FgSomaIPIContribuinte",
      "FgSomaIPINaoContribuinte",
      "FgPgtoDepositoBancario",
      "FgPgtoFinanciamento",
      "FgPgtoCreditoCliente",
      "FgRecuperacaoST",
      "FgSPEDZeraBaseCalculoICMS",
      "FgSPEDZeraVlICMS",
      "FgSPEDZeraBaseCalculoIPI",
      "FgSPEDZeraVlIPI",
      "FgSPEDZeraBaseCalculoICMSSub",
      "FgSPEDZeraVlICMSSub",
      "FgEmprestimo",
      "FgBonificacao",
      "FgReceberNoLocal",
      "FgGeraRemessaWMS",
      "FgSomaIPIFreteBaseICMSConsumidor",
      "FgAnulaSugestao",
      "FgDevolucaoRelCaixa",
      "FgDeduzICMSBCPISCOFINS",
      "FgPgtoPIX",
    ];
  }
}

NfCfop.knex(connections.oftalmo);

export type TNfCfop = ModelObject<NfCfop>;
