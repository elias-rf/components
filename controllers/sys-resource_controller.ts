import { dbSys } from '@/controllers/db/db-sys.db'
import { OrmDatabase, ormTable } from '@/orm'
import { TSchema } from '@/schemas/schema.type'
import { resource } from '@/schemas/sys/resource.schema'

export type TSysResourceFields = keyof typeof resource.fields
export type TSysResourceKeys = keyof typeof resource.fields

function sysResourceControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TSysResourceFields, TSysResourceKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const sysResourceController = sysResourceControllerFactory(
  dbSys,
  resource
)
