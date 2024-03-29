import { dbSys } from '@/data/sys/db-sys.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

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
