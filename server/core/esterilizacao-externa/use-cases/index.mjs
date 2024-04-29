import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { diario } from './diario.mjs'
import { list } from './list.mjs'
import { mensal } from './mensal.mjs'
import { modelo } from './modelo.mjs'
import { produto } from './produto.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const esterilizacaoExternaUseCases = (dataSource) => ({
  count: count(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  diario: diario(dataSource),
  list: list(dataSource),
  mensal: mensal(dataSource),
  modelo: modelo(dataSource),
  produto: produto(dataSource),
  read: read(dataSource),
  update: update(dataSource),
})
