import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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

function nfEntradaControleControllerFactory(db: OrmDatabase, schema: TSchema) {
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
