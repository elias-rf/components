import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tEtiqueta } from '@/schemas/oftalmo/tEtiqueta.schema'
import { TSchema } from '@/schemas/schema.type'

export type TEtiquetaExternaFields = keyof typeof tEtiqueta.fields
export type TEtiquetaExternaKeys = (typeof tEtiqueta.primary)[number]

function etiquetaExternaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEtiquetaExternaFields, TEtiquetaExternaKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
  }
}

export const etiquetaExternaController = etiquetaExternaControllerFactory(
  dbOftalmo,
  tEtiqueta
)
