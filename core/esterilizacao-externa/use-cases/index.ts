import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { diario } from './diario.js'
import { list } from './list.js'
import { mensal } from './mensal.js'
import { modelo } from './modelo.js'
import { produto } from './produto.js'
import { read } from './read.js'
import { update } from './update.js'

export const esterilizacaoExternaUseCases = (dataSource: TDataSource) => ({
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
