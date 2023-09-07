import { dbSys } from '@/controllers/db-sys.db'
import { OrmDatabase, ormTable } from '@/orm'
import { TSchema } from '@/schemas/schema.type'
import { resource } from '@/schemas/sys/resource.schema'

export type TSysResourceFields = keyof typeof resource.fields
export type TSysResourceKeys = keyof typeof resource.fields

function sysResourceControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TSysResourceFields, TSysResourceKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const sysResourceController = sysResourceControllerFactory(
  dbSys,
  resource
)
