import { dbSys } from '@/controllers/db/db-sys.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

/**
 * sysResource
 */

export const resource = {
  database: 'sys',
  table: 'resource',
  relations: {},
  primary: ['resource_id'] as const,
  fields: ['resource_id', 'description'],
}

export type TSysResourceFields = (typeof resource.fields)[number]
export type TSysResourceKeys = (typeof resource.primary)[number]

function sysResourceControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TSysResourceFields, TSysResourceKeys>(db, schema)
  return {
    sysResource_list: orm.rpc.list,
    sysResource_read: orm.rpc.read,
    sysResource_count: orm.rpc.count,
    sysResource_update: orm.rpc.update,
    sysResource_create: orm.rpc.create,
    sysResource_del: orm.rpc.del,
    sysResource_increment: orm.rpc.increment,
  }
}

export const sysResourceController = sysResourceControllerFactory(
  dbSys,
  resource
)
