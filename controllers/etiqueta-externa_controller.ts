import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const etiquetaExternaSchema: TSchema = {
  table: 'tEtiqueta',
  primary: ['controle'] as const,
  fields: ['controle', 'qtdImpressao', 'dataFabricacao'],
}

export type TEtiquetaExternaFields =
  (typeof etiquetaExternaSchema.fields)[number]
export type TEtiquetaExternaKeys =
  (typeof etiquetaExternaSchema.primary)[number]

function etiquetaExternaControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TEtiquetaExternaFields, TEtiquetaExternaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const etiquetaExternaController = etiquetaExternaControllerFactory(
  dbOftalmo,
  etiquetaExternaSchema
)
