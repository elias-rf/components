import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const produtoPlanoControleUseCases = (dataSource: TDataSource) => ({
  count: count(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  list: list(dataSource),
  read: read(dataSource),
  update: update(dataSource),
})
