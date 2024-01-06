import { dbLog } from '@/core/db/db-log.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const logSchema = {
  table: 'log',
  primary: ['reqId'] as const,
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
  ] as const,
}

export type TlogFields = (typeof logSchema.fields)[number]
export type TlogKeys = (typeof logSchema.primary)[number]

function logControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TlogFields, TlogKeys>(db, schema)

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
