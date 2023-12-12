import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function pedidoItemControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TPedidoItemFields, TPedidoItemKeys>(db, schema)
  return {
    pedidoItem_list: orm.rpc.list,
    pedidoItem_read: orm.rpc.read,
    pedidoItem_count: orm.rpc.count,
    pedidoItem_update: orm.rpc.update,
    pedidoItem_create: orm.rpc.create,
    pedidoItem_del: orm.rpc.del,
    pedidoItem_increment: orm.rpc.increment,
  }
}

export const pedidoItemController = pedidoItemControllerFactory(
  dbPlano,
  ItemPedido
)
