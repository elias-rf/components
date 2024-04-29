import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const produtoPlanoControleUseCases = (dataSource) => ({
  count: count(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  list: list(dataSource),
  read: read(dataSource),
  update: update(dataSource),
})
