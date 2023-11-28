import { dbSys } from '@/controllers/db/db-sys.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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
    ...orm.rpc,
  }
}

export const sysResourceController = sysResourceControllerFactory(
  dbSys,
  resource
)
