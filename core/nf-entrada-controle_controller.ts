import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const LotesNotaEntrada: TSchema = {
  table: 'LotesNotaEntrada',
  primary: ['NumNota', 'Serie'] as const,
  fields: [
    'NumNota',
    'CdFornecedor',
    'Serie',
    'CdProduto',
    'NumLote',
    'Quantidade',
    'CdFilial',
    'Modelo',
  ],
}

export type TNfEntradaControleFields = (typeof LotesNotaEntrada.fields)[number]
export type TNfEntradaControleKeys = (typeof LotesNotaEntrada.primary)[number]

function nfEntradaControleControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaControleFields, TNfEntradaControleKeys>(
    db,
    schema
  )
  return {
    nfEntradaControle_list: orm.rpc.list,
    nfEntradaControle_read: orm.rpc.read,
    nfEntradaControle_count: orm.rpc.count,
    nfEntradaControle_update: orm.rpc.update,
    nfEntradaControle_create: orm.rpc.create,
    nfEntradaControle_del: orm.rpc.del,
    nfEntradaControle_increment: orm.rpc.increment,
  }
}

export const nfEntradaControleController = nfEntradaControleControllerFactory(
  dbPlano,
  LotesNotaEntrada
)
