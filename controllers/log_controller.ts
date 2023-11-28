import { dbLog } from '@/controllers/db/db-log.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

  return { ...orm.rpc }
}

export const logController = logControllerFactory(dbLog, logSchema)
