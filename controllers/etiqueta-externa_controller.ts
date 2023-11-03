import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const etiquetaExternaSchema: TSchema = {
  table: 'tEtiqueta',
  primary: ['controle'] as const,
  fields: ['controle', 'qtdImpressao', 'dataFabricacao'],
}

export type TEtiquetaExternaFields =
  (typeof etiquetaExternaSchema.fields)[number]
export type TEtiquetaExternaKeys =
  (typeof etiquetaExternaSchema.primary)[number]

function etiquetaExternaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEtiquetaExternaFields, TEtiquetaExternaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const etiquetaExternaController = etiquetaExternaControllerFactory(
  dbOftalmo,
  etiquetaExternaSchema
)
