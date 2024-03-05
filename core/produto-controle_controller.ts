import { planoDb } from '@/data/plano/plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const Lotes: TSchema = {
  table: 'Lotes',
  primary: ['CdProduto', 'CdLote'] as const,
  fields: [
    'CdLote',

    'CdProduto',

    'CdFornecedor',

    'CdNRA',

    'DtFabricacao',

    'DtValidade',

    'DtAnalise',

    'Aspecto',

    'FatorCorrecao',

    'Densidade',

    'PercentualDiluicao',

    'SituacaoLote',

    'SerieNfEntrada',

    'QtdeAdquirida',

    'NumNfEntrada',

    'SaldoPeso',

    'DtEntrada',

    'DtLimiteUso',

    'TipoLote',

    'IdReduzido',

    'CdFilial',

    'Modelo',

    'NumLote',
  ] as const,
}

export type TProdutoControleFields = (typeof Lotes.fields)[number]
export type TProdutoControleKeys = (typeof Lotes.primary)[number]

function produtoControleControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TProdutoControleFields, TProdutoControleKeys>(db, schema)
  return {
    produtoControle_list: orm.rpc.list,
    produtoControle_read: orm.rpc.read,
    produtoControle_count: orm.rpc.count,
    produtoControle_update: orm.rpc.update,
    produtoControle_create: orm.rpc.create,
    produtoControle_del: orm.rpc.del,
    produtoControle_increment: orm.rpc.increment,
  }
}

export const produtoControleController = produtoControleControllerFactory(
  planoDb,
  Lotes
)
