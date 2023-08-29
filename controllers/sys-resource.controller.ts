import { dbSys } from '@/controllers/db-sys.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { TSchema } from '@/schemas/schema.type'
import { Tresource, resource } from '@/schemas/sys/resource.schema'

class SysResourceController extends OrmTable<Tresource> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const sysResourceController = new SysResourceController(dbSys, resource)
