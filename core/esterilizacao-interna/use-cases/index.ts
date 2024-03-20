import { diario } from '@/core/esterilizacao-interna/use-cases/diario.js'
import { mensal } from '@/core/esterilizacao-interna/use-cases/mensal.js'
import { modelo } from '@/core/esterilizacao-interna/use-cases/modelo.js'
import { produto } from '@/core/esterilizacao-interna/use-cases/produto.js'
import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const esterilizacaoInternaUseCases = (dataSource: TDataSource) => ({
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
