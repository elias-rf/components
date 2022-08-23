import { TEntity } from "@er/types/*";

export const NatOpe: TEntity =
  {
  "database": "plano",
  "table": "NatOpe",
  "fields": [
    {
      "field": "Cartao",
      "label": "Cartao",
      "name": "Cartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Cheque",
      "label": "Cheque",
      "name": "Cheque",
      "type": "string",
      "size": 1
    },
    {
      "field": "Correcao",
      "label": "Correcao",
      "name": "Correcao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Crediario",
      "label": "Crediario",
      "name": "Crediario",
      "type": "string",
      "size": 1
    },
    {
      "field": "Dinheiro",
      "label": "Dinheiro",
      "name": "Dinheiro",
      "type": "string",
      "size": 1
    },
    {
      "field": "Estatistica",
      "label": "Estatistica",
      "name": "Estatistica",
      "type": "string",
      "size": 1
    },
    {
      "field": "Estoque",
      "label": "Estoque",
      "name": "Estoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "ICMS",
      "label": "ICMS",
      "name": "ICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "ICMSCupom",
      "label": "ICMSCupom",
      "name": "ICMSCupom",
      "type": "string",
      "size": 1
    },
    {
      "field": "IPI",
      "label": "IPI",
      "name": "IPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "NatOpe_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "ObsComplementar",
      "label": "ObsComplementar",
      "name": "ObsComplementar",
      "type": "string",
      "size": 255
    },
    {
      "field": "OutrasFormas",
      "label": "OutrasFormas",
      "name": "OutrasFormas",
      "type": "string",
      "size": 1
    },
    {
      "field": "PrecoCusto",
      "label": "PrecoCusto",
      "name": "PrecoCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "PrecoVenda",
      "label": "PrecoVenda",
      "name": "PrecoVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "SomaDisp",
      "label": "SomaDisp",
      "name": "SomaDisp",
      "type": "string",
      "size": 1
    },
    {
      "field": "TradicaoFutura",
      "label": "TradicaoFutura",
      "name": "TradicaoFutura",
      "type": "string",
      "size": 1
    },
    {
      "field": "Tributacao",
      "label": "Tributacao",
      "name": "Tributacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FreteBaseTotal",
      "label": "FreteBaseTotal",
      "name": "FreteBaseTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FreteTotal",
      "label": "FreteTotal",
      "name": "FreteTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "OperTransferencia",
      "label": "OperTransferencia",
      "name": "OperTransferencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoOperacao",
      "label": "TipoOperacao",
      "name": "TipoOperacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImportacao",
      "label": "FgImportacao",
      "name": "FgImportacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControlaPsico",
      "label": "FgControlaPsico",
      "name": "FgControlaPsico",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFicha26",
      "label": "FgFicha26",
      "name": "FgFicha26",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercDescAutomatico",
      "label": "PercDescAutomatico",
      "name": "PercDescAutomatico",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIcms",
      "label": "FgSomaIcms",
      "name": "FgSomaIcms",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConhecimentodeTransporte",
      "label": "FgConhecimentodeTransporte",
      "name": "FgConhecimentodeTransporte",
      "type": "string",
      "size": 1
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 60
    },
    {
      "field": "FgRemessaIndustrializacao",
      "label": "FgRemessaIndustrializacao",
      "name": "FgRemessaIndustrializacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "DescricaoNovo",
      "label": "DescricaoNovo",
      "name": "DescricaoNovo",
      "type": "string",
      "size": 30
    },
    {
      "field": "FgAlteraCustoMedio",
      "label": "FgAlteraCustoMedio",
      "name": "FgAlteraCustoMedio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCupomFiscal",
      "label": "FgCupomFiscal",
      "name": "FgCupomFiscal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPerdaPsico",
      "label": "FgPerdaPsico",
      "name": "FgPerdaPsico",
      "type": "string",
      "size": 1
    },
    {
      "field": "MotivoPerdaPsico",
      "label": "MotivoPerdaPsico",
      "name": "MotivoPerdaPsico",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgSintegraZeraVlProdutos",
      "label": "FgSintegraZeraVlProdutos",
      "name": "FgSintegraZeraVlProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSintegraZeraVlTotal",
      "label": "FgSintegraZeraVlTotal",
      "name": "FgSintegraZeraVlTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSintegraZeraBaseCalculoICMS",
      "label": "FgSintegraZeraBaseCalculoICMS",
      "name": "FgSintegraZeraBaseCalculoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSintegraZeraVlICMS",
      "label": "FgSintegraZeraVlICMS",
      "name": "FgSintegraZeraVlICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "ObsComplementar1",
      "label": "ObsComplementar1",
      "name": "ObsComplementar1",
      "type": "string",
      "size": 256
    },
    {
      "field": "ObsComplementar2",
      "label": "ObsComplementar2",
      "name": "ObsComplementar2",
      "type": "string",
      "size": 256
    },
    {
      "field": "ObsComplementar3",
      "label": "ObsComplementar3",
      "name": "ObsComplementar3",
      "type": "string",
      "size": 256
    },
    {
      "field": "ObsComplementar4",
      "label": "ObsComplementar4",
      "name": "ObsComplementar4",
      "type": "string",
      "size": 256
    },
    {
      "field": "FgDemonstracao",
      "label": "FgDemonstracao",
      "name": "FgDemonstracao",
      "type": "string",
      "size": 1
    },
    {
      "field": "SituacaoTributaria",
      "label": "SituacaoTributaria",
      "name": "SituacaoTributaria",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgSubstituicaoTributaria",
      "label": "FgSubstituicaoTributaria",
      "name": "FgSubstituicaoTributaria",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPIBaseSub",
      "label": "FgSomaIPIBaseSub",
      "name": "FgSomaIPIBaseSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaFreteBaseSub",
      "label": "FgSomaFreteBaseSub",
      "name": "FgSomaFreteBaseSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDetalhaCombustivel",
      "label": "FgDetalhaCombustivel",
      "name": "FgDetalhaCombustivel",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaISS",
      "label": "FgDestacaISS",
      "name": "FgDestacaISS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgICMSDiferimentoTotal",
      "label": "FgICMSDiferimentoTotal",
      "name": "FgICMSDiferimentoTotal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraCusto",
      "label": "FgGeraCusto",
      "name": "FgGeraCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraReceita",
      "label": "FgGeraReceita",
      "name": "FgGeraReceita",
      "type": "string",
      "size": 1
    },
    {
      "field": "CSTICMSSugerida",
      "label": "CSTICMSSugerida",
      "name": "CSTICMSSugerida",
      "type": "string",
      "size": 3
    },
    {
      "field": "CSTIPISugerida",
      "label": "CSTIPISugerida",
      "name": "CSTIPISugerida",
      "type": "string",
      "size": 3
    },
    {
      "field": "CSTPISSugerida",
      "label": "CSTPISSugerida",
      "name": "CSTPISSugerida",
      "type": "string",
      "size": 3
    },
    {
      "field": "CSTCofinsSugerida",
      "label": "CSTCofinsSugerida",
      "name": "CSTCofinsSugerida",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgGeraCreditoICMS",
      "label": "FgGeraCreditoICMS",
      "name": "FgGeraCreditoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgICMSSobreFrete",
      "label": "FgICMSSobreFrete",
      "name": "FgICMSSobreFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgIPISobreFrete",
      "label": "FgIPISobreFrete",
      "name": "FgIPISobreFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdTipoCredito",
      "label": "CdTipoCredito",
      "name": "CdTipoCredito",
      "type": "int",
      "size": 5
    },
    {
      "field": "CdBaseCalculoCredito",
      "label": "CdBaseCalculoCredito",
      "name": "CdBaseCalculoCredito",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgPISSobreFrete",
      "label": "FgPISSobreFrete",
      "name": "FgPISSobreFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCOFINSSobreFrete",
      "label": "FgCOFINSSobreFrete",
      "name": "FgCOFINSSobreFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDeduzICMSCustoMedio",
      "label": "FgDeduzICMSCustoMedio",
      "name": "FgDeduzICMSCustoMedio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaPIS",
      "label": "FgDestacaPIS",
      "name": "FgDestacaPIS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaCOFINS",
      "label": "FgDestacaCOFINS",
      "name": "FgDestacaCOFINS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgServico",
      "label": "FgServico",
      "name": "FgServico",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaICMSConsumidor",
      "label": "FgDestacaICMSConsumidor",
      "name": "FgDestacaICMSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaIPIConsumidor",
      "label": "FgDestacaIPIConsumidor",
      "name": "FgDestacaIPIConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaPISConsumidor",
      "label": "FgDestacaPISConsumidor",
      "name": "FgDestacaPISConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaCOFINSConsumidor",
      "label": "FgDestacaCOFINSConsumidor",
      "name": "FgDestacaCOFINSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaICMSCupomConsumidor",
      "label": "FgDestacaICMSCupomConsumidor",
      "name": "FgDestacaICMSCupomConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPIBaseICMSConsumidor",
      "label": "FgSomaIPIBaseICMSConsumidor",
      "name": "FgSomaIPIBaseICMSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPIBaseICMSSubConsumidor",
      "label": "FgSomaIPIBaseICMSSubConsumidor",
      "name": "FgSomaIPIBaseICMSSubConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaDespesasBaseICMSConsumidor",
      "label": "FgSomaDespesasBaseICMSConsumidor",
      "name": "FgSomaDespesasBaseICMSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaFreteBaseICMSConsumidor",
      "label": "FgSomaFreteBaseICMSConsumidor",
      "name": "FgSomaFreteBaseICMSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaFreteBaseICMSSubConsumidor",
      "label": "FgSomaFreteBaseICMSSubConsumidor",
      "name": "FgSomaFreteBaseICMSSubConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaFreteBaseIPIConsumidor",
      "label": "FgSomaFreteBaseIPIConsumidor",
      "name": "FgSomaFreteBaseIPIConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaFreteTotalNotaConsumidor",
      "label": "FgSomaFreteTotalNotaConsumidor",
      "name": "FgSomaFreteTotalNotaConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgICMSCobradoAnteriormenteST",
      "label": "FgICMSCobradoAnteriormenteST",
      "name": "FgICMSCobradoAnteriormenteST",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgICMSNaoTribSimplesNac",
      "label": "FgICMSNaoTribSimplesNac",
      "name": "FgICMSNaoTribSimplesNac",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPIContribuinte",
      "label": "FgSomaIPIContribuinte",
      "name": "FgSomaIPIContribuinte",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPINaoContribuinte",
      "label": "FgSomaIPINaoContribuinte",
      "name": "FgSomaIPINaoContribuinte",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPgtoDepositoBancario",
      "label": "FgPgtoDepositoBancario",
      "name": "FgPgtoDepositoBancario",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPgtoFinanciamento",
      "label": "FgPgtoFinanciamento",
      "name": "FgPgtoFinanciamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPgtoCreditoCliente",
      "label": "FgPgtoCreditoCliente",
      "name": "FgPgtoCreditoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRecuperacaoST",
      "label": "FgRecuperacaoST",
      "name": "FgRecuperacaoST",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraBaseCalculoICMS",
      "label": "FgSPEDZeraBaseCalculoICMS",
      "name": "FgSPEDZeraBaseCalculoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraVlICMS",
      "label": "FgSPEDZeraVlICMS",
      "name": "FgSPEDZeraVlICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraBaseCalculoIPI",
      "label": "FgSPEDZeraBaseCalculoIPI",
      "name": "FgSPEDZeraBaseCalculoIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraVlIPI",
      "label": "FgSPEDZeraVlIPI",
      "name": "FgSPEDZeraVlIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraBaseCalculoICMSSub",
      "label": "FgSPEDZeraBaseCalculoICMSSub",
      "name": "FgSPEDZeraBaseCalculoICMSSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSPEDZeraVlICMSSub",
      "label": "FgSPEDZeraVlICMSSub",
      "name": "FgSPEDZeraVlICMSSub",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEmprestimo",
      "label": "FgEmprestimo",
      "name": "FgEmprestimo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBonificacao",
      "label": "FgBonificacao",
      "name": "FgBonificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReceberNoLocal",
      "label": "FgReceberNoLocal",
      "name": "FgReceberNoLocal",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraRemessaWMS",
      "label": "FgGeraRemessaWMS",
      "name": "FgGeraRemessaWMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPIFreteBaseICMSConsumidor",
      "label": "FgSomaIPIFreteBaseICMSConsumidor",
      "name": "FgSomaIPIFreteBaseICMSConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAnulaSugestao",
      "label": "FgAnulaSugestao",
      "name": "FgAnulaSugestao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDevolucaoRelCaixa",
      "label": "FgDevolucaoRelCaixa",
      "name": "FgDevolucaoRelCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDeduzICMSBCPISCOFINS",
      "label": "FgDeduzICMSBCPISCOFINS",
      "name": "FgDeduzICMSBCPISCOFINS",
      "type": "string",
      "size": 1
    }
  ]
}
