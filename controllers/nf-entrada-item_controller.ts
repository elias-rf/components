import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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
    ...orm.rpc,
  }
}

export const nfEntradaItemController = nfEntradaItemControllerFactory(
  dbPlano,
  NFItem
)
