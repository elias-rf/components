import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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
