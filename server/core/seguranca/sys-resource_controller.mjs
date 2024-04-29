import { dbSys } from '../../data/sys/db-sys.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

/**
 * sysResource
 */

export const resource = {
  database: 'sys',
  table: 'resource',
  relations: {},
  primary: ['resource_id'],
  fields: ['resource_id', 'description'],
}

function sysResourceControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
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
