import { planoDb } from '../../data/plano/plano.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const NatOpe = {
  table: 'NatOpe',
  primary: ['Nop'],
  fields: [
    'Cartao',
    'Cheque',
    'Correcao',
    'Crediario',
    'Dinheiro',
    'Estatistica',
    'Estoque',
    'ICMS',
    'ICMSCupom',
    'IPI',
    'Nop',
    'ObsComplementar',
    'OutrasFormas',
    'PrecoCusto',
    'PrecoVenda',
    'SomaDisp',
    'TradicaoFutura',
    'Tributacao',
    'FreteBaseTotal',
    'FreteTotal',
    'OperTransferencia',
    'TipoMovimentacao',
    'TipoOperacao',
    'FgImportacao',
    'FgControlaPsico',
    'FgFicha26',
    'PercDescAutomatico',
    'FgAtivo',
    'FgSomaIcms',
    'FgConhecimentodeTransporte',
    'Descricao',
    'FgRemessaIndustrializacao',
    'DescricaoNovo',
    'FgAlteraCustoMedio',
    'FgCupomFiscal',
    'FgPerdaPsico',
    'MotivoPerdaPsico',
    'FgSintegraZeraVlProdutos',
    'FgSintegraZeraVlTotal',
    'FgSintegraZeraBaseCalculoICMS',
    'FgSintegraZeraVlICMS',
    'ObsComplementar1',
    'ObsComplementar2',
    'ObsComplementar3',
    'ObsComplementar4',
    'FgDemonstracao',
    'SituacaoTributaria',
    'FgSubstituicaoTributaria',
    'FgSomaIPIBaseSub',
    'FgSomaFreteBaseSub',
    'FgDetalhaCombustivel',
    'FgDestacaISS',
    'FgICMSDiferimentoTotal',
    'FgGeraCusto',
    'FgGeraReceita',
    'CSTICMSSugerida',
    'CSTIPISugerida',
    'CSTPISSugerida',
    'CSTCofinsSugerida',
    'FgGeraCreditoICMS',
    'FgICMSSobreFrete',
    'FgIPISobreFrete',
    'CdTipoCredito',
    'CdBaseCalculoCredito',
    'FgPISSobreFrete',
    'FgCOFINSSobreFrete',
    'FgDeduzICMSCustoMedio',
    'FgDestacaPIS',
    'FgDestacaCOFINS',
    'FgServico',
    'FgDestacaICMSConsumidor',
    'FgDestacaIPIConsumidor',
    'FgDestacaPISConsumidor',
    'FgDestacaCOFINSConsumidor',
    'FgDestacaICMSCupomConsumidor',
    'FgSomaIPIBaseICMSConsumidor',
    'FgSomaIPIBaseICMSSubConsumidor',
    'FgSomaDespesasBaseICMSConsumidor',
    'FgSomaFreteBaseICMSConsumidor',
    'FgSomaFreteBaseICMSSubConsumidor',
    'FgSomaFreteBaseIPIConsumidor',
    'FgSomaFreteTotalNotaConsumidor',
    'FgICMSCobradoAnteriormenteST',
    'FgICMSNaoTribSimplesNac',
    'FgSomaIPIContribuinte',
    'FgSomaIPINaoContribuinte',
    'FgPgtoDepositoBancario',
    'FgPgtoFinanciamento',
    'FgPgtoCreditoCliente',
    'FgRecuperacaoST',
    'FgSPEDZeraBaseCalculoICMS',
    'FgSPEDZeraVlICMS',
    'FgSPEDZeraBaseCalculoIPI',
    'FgSPEDZeraVlIPI',
    'FgSPEDZeraBaseCalculoICMSSub',
    'FgSPEDZeraVlICMSSub',
    'FgEmprestimo',
    'FgBonificacao',
    'FgReceberNoLocal',
    'FgGeraRemessaWMS',
    'FgSomaIPIFreteBaseICMSConsumidor',
    'FgAnulaSugestao',
    'FgDevolucaoRelCaixa',
    'FgDeduzICMSBCPISCOFINS',
    'FgPgtoPIX',
  ],
}

function nfCfopControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    nfCfop_list: orm.rpc.list,
    nfCfop_read: orm.rpc.read,
    nfCfop_count: orm.rpc.count,
    nfCfop_update: orm.rpc.update,
    nfCfop_create: orm.rpc.create,
    nfCfop_del: orm.rpc.del,
    nfCfop_increment: orm.rpc.increment,
  }
}

export const nfCfopController = nfCfopControllerFactory(planoDb, NatOpe)
