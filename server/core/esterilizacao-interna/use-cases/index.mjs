import { diario } from '../../../core/esterilizacao-interna/use-cases/diario.mjs'
import { mensal } from '../../../core/esterilizacao-interna/use-cases/mensal.mjs'
import { modelo } from '../../../core/esterilizacao-interna/use-cases/modelo.mjs'
import { produto } from '../../../core/esterilizacao-interna/use-cases/produto.mjs'

import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const esterilizacaoInternaUseCases = (dataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  diario: diario(dataSource),
  mensal: mensal(dataSource),
  modelo: modelo(dataSource),
  produto: produto(dataSource),
})
