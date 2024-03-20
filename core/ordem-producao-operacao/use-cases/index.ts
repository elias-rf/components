import { TDataSource } from '@/data/index.js'
// import { count } from './count.js'
// import { create } from './create.js'
// import { del } from './del.js'
import { diario } from '@/core/ordem-producao-operacao/use-cases/diario.js'
import { mensal } from '@/core/ordem-producao-operacao/use-cases/mensal.js'
import { modelo } from '@/core/ordem-producao-operacao/use-cases/modelo.js'
import { produto } from '@/core/ordem-producao-operacao/use-cases/produto.js'
import { turno } from '@/core/ordem-producao-operacao/use-cases/turno.js'
import { list } from './list.js'
import { read } from './read.js'
// import { update } from './update.js'

export const ordemProducaoOperacaoUseCases = (dataSource: TDataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  // count: count(dataSource),
  // update: update(dataSource),
  // create: create(dataSource),
  // del: del(dataSource),
  diario: diario(dataSource),
  mensal: mensal(dataSource),
  modelo: modelo(dataSource),
  produto: produto(dataSource),
  turno: turno(dataSource),
})
