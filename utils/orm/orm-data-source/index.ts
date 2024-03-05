import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '../adapter-knex.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { increment } from './increment.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'
import { ormUtils } from './utils.js'

export function ormTableDataSource(db: TAdapterKnex, schema: TSchema) {
  const util = ormUtils(schema)

  return {
    rpc: {
      list: list(db, schema),
      read: read(db, schema),
      count: count(db, schema),
      update: update(db, schema),
      create: create(db, schema),
      del: del(db, schema),
      increment: increment(db, schema),
    },
    util,
  }
}
