import { planoDb } from '@/data/plano/plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const NFItem: TSchema = {
  table: 'NFItem',
  primary: ['CdEmpresa', 'Modelo', 'NroNf', 'Serie'],
  fields: [
    'CdEmpresa',
    'CdFornecedor',
    'NroNF',
    'Serie',
    'Modelo',
    'CdProduto',
    'FgCusto',
    'FgEtiqueta',
    'PercICMS',
    'PercIPI',
    'Quantidade',
    'TipoMovimentacao',
    'VlAcrescItem',
    'VlDescItem',
    'VlrICMS',
    'VlrIPI',
    'VlTotItem',
    'CustoMedio',
    'TipoTributacao',
    'VlBaseSub',
    'VlICMSSub',
    'ICMSBasCalc',
    'DtEntr',
    'FgEstoque',
    'VlRepasseICMSItem',
    'FgICMSJaRecolhido',
    'PrecPMC',
    'VlRelacionado',
    'FgCompoeBaseSub',
    'Nop',
    'NopfiscalItem',
    'VlBaseCalculoICMS',
    'VlBrutoUnitario',
    'VlLiquidoUnitario',
    'VlBaseCalculoCreditoICMS',
    'VlCreditoICMS',
    'CdBaseCalculoCreditoPISCOFINS',
    'CdTipoCreditoPISCOFINS',
    'CdContribuicaoApuradaPISCOFINS',
    'VlICMSSubRecolherGNRE',
    'PercReducaoICMS',
    'Sequencia',
    'VlBaseCalculoIPI',
    'SituacaoTributariaICMS',
    'SituacaoTributariaIPI',
    'OrigemMercadoria',
    'SituacaoTributariaPIS',
    'SituacaoTributariaCofins',
    'VlBaseCalculoPIS',
    'AliquotaPIS',
    'VlPIS',
    'QtdePIS',
    'VlPISSub',
    'VlBaseCalculoCofins',
    'AliquotaCofins',
    'VlCofins',
    'QtdeCofins',
    'VlCofinsSub',
    'VlBaseICMSManual',
    'VlICMSManual',
    'VlBaseIPIManual',
    'VlIPIManual',
    'VlBasePISManual',
    'VlPISManual',
    'VlBaseCofinsManual',
    'VlCofinsManual',
    'FgConferido',
    'VlFreteItem',
    'VlDespesaAcessoriaItem',
    'VlSeguroItem',
    'VlBaseCalculoICMSSubRecolherGNRE',
    'FgDesconsideraEstoque',
    'FgBonificacao',
    'VlCustoUnitario',
    'PlanoContaSped',
    'VlFCPSTItem',
  ],
}

export type TNfEntradaItemFields = (typeof NFItem.fields)[number]
export type TNfEntradaItemKeys = (typeof NFItem.primary)[number]

function nfEntradaItemControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaItemFields, TNfEntradaItemKeys>(db, schema)
  return {
    nfEntradaItem_list: orm.rpc.list,
    nfEntradaItem_read: orm.rpc.read,
    nfEntradaItem_count: orm.rpc.count,
    nfEntradaItem_update: orm.rpc.update,
    nfEntradaItem_create: orm.rpc.create,
    nfEntradaItem_del: orm.rpc.del,
    nfEntradaItem_increment: orm.rpc.increment,
  }
}

export const nfEntradaItemController = nfEntradaItemControllerFactory(
  planoDb,
  NFItem
)
