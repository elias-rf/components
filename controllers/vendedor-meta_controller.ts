import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const vendedor = {
  database: 'oftalmo',
  table: 'vendedor',
  primary: ['id'] as const,
  fields: ['id', 'uf', 'meta'],
}

export type TVendedorMetaFields = (typeof vendedor.fields)[number]
export type TVendedorMetaKeys = (typeof vendedor.primary)[number]

function vendedorMetaControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TVendedorMetaFields, TVendedorMetaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const vendedorMetaController = vendedorMetaControllerFactory(
  dbOftalmo,
  vendedor
)
