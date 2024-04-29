import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { increment } from './increment.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const estoqueUseCases = (dataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  increment: increment(dataSource),
})
