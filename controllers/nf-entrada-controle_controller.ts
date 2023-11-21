import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
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

function nfEntradaControleControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaControleFields, TNfEntradaControleKeys>(
    db,
    schema
  )
  return {
    ...orm.rpc,
  }
}

export const nfEntradaControleController = nfEntradaControleControllerFactory(
  dbPlano,
  LotesNotaEntrada
)
