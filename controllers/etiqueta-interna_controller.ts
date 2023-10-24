import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_producao_etiqueta } from '@/schemas/oftalmo/tbl_producao_etiqueta.schema'
import { TSchema } from '@/schemas/schema.type'

export type TEtiquetaInternaFields = keyof typeof tbl_producao_etiqueta.fields
export type TEtiquetaInternaKeys =
  (typeof tbl_producao_etiqueta.primary)[number]

function etiquetaInternaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEtiquetaInternaFields, TEtiquetaInternaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const etiquetaInternaController = etiquetaInternaControllerFactory(
  dbOftalmo,
  tbl_producao_etiqueta
)
