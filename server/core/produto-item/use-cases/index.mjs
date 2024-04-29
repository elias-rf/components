import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { produtoPlano } from './produto-plano.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const produtoItemUseCases = (
  dataSource,
  { produtoPlanoController }
) => ({
  count: count(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  list: list(dataSource),
  produtoPlano: produtoPlano(dataSource, { produtoPlanoController }),
  read: read(dataSource),
  update: update(dataSource),
})
