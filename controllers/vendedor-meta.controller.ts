import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { vendedor } from '@/schemas/oftalmo/vendedor.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TVendedorMetaFields = keyof typeof vendedor.fields
export type TVendedorMetaKeys = (typeof vendedor.primary)[number]

function vendedorMetaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TVendedorMetaFields, TVendedorMetaKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const vendedorMetaController = vendedorMetaControllerFactory(
  dbOftalmo,
  vendedor
)
