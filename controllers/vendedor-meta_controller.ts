import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const vendedor = {
  database: 'oftalmo',
  table: 'vendedor',
  primary: ['id'] as const,
  fields: ['id', 'uf', 'meta'],
}

export type TVendedorMetaFields = (typeof vendedor.fields)[number]
export type TVendedorMetaKeys = (typeof vendedor.primary)[number]

function vendedorMetaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TVendedorMetaFields, TVendedorMetaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const vendedorMetaController = vendedorMetaControllerFactory(
  dbOftalmo,
  vendedor
)
