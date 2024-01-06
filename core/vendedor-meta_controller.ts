import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const vendedor = {
  database: 'oftalmo',
  table: 'vendedor',
  primary: ['id'] as const,
  fields: ['id', 'uf', 'meta'],
}

export type TVendedorMetaFields = (typeof vendedor.fields)[number]
export type TVendedorMetaKeys = (typeof vendedor.primary)[number]

function vendedorMetaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TVendedorMetaFields, TVendedorMetaKeys>(db, schema)
  return {
    vendedorMeta_list: orm.rpc.list,
    vendedorMeta_read: orm.rpc.read,
    vendedorMeta_count: orm.rpc.count,
    vendedorMeta_update: orm.rpc.update,
    vendedorMeta_create: orm.rpc.create,
    vendedorMeta_del: orm.rpc.del,
    vendedorMeta_increment: orm.rpc.increment,
  }
}

export const vendedorMetaController = vendedorMetaControllerFactory(
  dbOftalmo,
  vendedor
)
