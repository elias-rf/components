import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { increment } from './increment.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'
import { ormUtils } from './utils.mjs'

export function ormTableDataSource(db, schema) {
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
