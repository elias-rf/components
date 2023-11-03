import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const ItemPedido = {
  database: 'plano',
  table: 'ItemPedido',
  primary: [],
  fields: [
    'CdFilial',

    'CdProduto',

    'NumPedido',

    'Tipo',

    'DtPrevEntrega',

    'Sequencia',

    'CdRefEstoque',

    'CdKit',

    'Qtde',

    'ConversaoMedida',

    'Correcao',

    'FgPeso',

    'ICMS',

    'ImprimeComponentes',

    'Peso',

    'SelecProd',

    'VlDescontoFechamento',

    'VlUnitario',

    'PercDesconto',

    'VlDesconto',

    'VlLiquido',

    'IPI',

    'VlTotal',

    'CustoFinanc',

    'QtdeAtendida',

    'CdAcumuladorParcial',

    'ComplementoDescricao',

    'CRM',

    'PercLimiteComissao',

    'NumFormula',

    'VlVistaUnit',

    'VlPrazoUnit',

    'VlFidelidadeUnit',

    'QtdeFormula',

    'DescricaoAlterada',

    'StatusTRN',

    'Unidade',

    'FgImprimeObs',

    'DtReceita',

    'TributacaoICMS',

    'NumPedidoEmitente',

    'CdProjeto',

    'fgBuscaDCB',

    'PrazoEntregaItem',

    'VlVendaOriginal',

    'VlAcrescimo',

    'FgSituacaoItem',

    'DtEmissao',

    'FgPreVenda',

    'ControleNum',

    'ControleSeq',

    'SituacaoTributaria',

    'AliquotaICMS',

    'DescricaoProduto',

    'PercDescontoOriginal',

    'AliquotaICMSST',

    'CdSetorEntrega',

    'VlPesoBruto',

    'CdStatus',

    'VlAcrescimoProduto',

    'VlUnitarioNovo',
  ],
}

export type TPedidoItemFields = (typeof ItemPedido.fields)[number]
export type TPedidoItemKeys = (typeof ItemPedido.primary)[number]

function pedidoItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPedidoItemFields, TPedidoItemKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pedidoItemController = pedidoItemControllerFactory(
  dbPlano,
  ItemPedido
)
