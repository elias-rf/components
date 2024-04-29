import { dbLog } from '../../data/log/db-log.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const logSchema = {
  table: 'log',
  primary: ['reqId'],
  fields: [
    'reqId',
    'date',
    'time',
    'origin',
    'user',
    'method',
    'args',
    'responseTime',
    'status',
  ],
}

function logControllerFactory(db, schema) {
  const orm = ormTable(db, schema)

  return {
    log_list: orm.rpc.list,
    log_read: orm.rpc.read,
    log_count: orm.rpc.count,
    log_update: orm.rpc.update,
    log_create: orm.rpc.create,
    log_del: orm.rpc.del,
    log_increment: orm.rpc.increment,
  }
}

export const logController = logControllerFactory(dbLog, logSchema)
