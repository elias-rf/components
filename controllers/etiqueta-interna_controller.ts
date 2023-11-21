import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const etiquetaInternaSchema: TSchema = {
  table: 'tbl_producao_etiqueta',
  primary: ['NumControle'] as const,
  fields: ['NumControle', 'fkProdutoItem', 'DataInsercao'],
}

export type TEtiquetaInternaFields =
  (typeof etiquetaInternaSchema.fields)[number]
export type TEtiquetaInternaKeys =
  (typeof etiquetaInternaSchema.primary)[number]

function etiquetaInternaControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TEtiquetaInternaFields, TEtiquetaInternaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const etiquetaInternaController = etiquetaInternaControllerFactory(
  dbOftalmo,
  etiquetaInternaSchema
)
