import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const NatOpe: TSchema = {
  table: 'NatOpe',
  primary: ['Nop'] as const,
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

export type TNfCfopFields = (typeof NatOpe.fields)[number]
export type TNfCfopKeys = (typeof NatOpe.primary)[number]

function nfCfopControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfCfopFields, TNfCfopKeys>(db, schema)
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

export const nfCfopController = nfCfopControllerFactory(dbPlano, NatOpe)
