// import { count } from './count.mjs'
// import { create } from './create.mjs'
// import { del } from './del.mjs'
import { diario } from '../../../core/ordem-producao-operacao/use-cases/diario.mjs'
import { mensal } from '../../../core/ordem-producao-operacao/use-cases/mensal.mjs'
import { modelo } from '../../../core/ordem-producao-operacao/use-cases/modelo.mjs'
import { produto } from '../../../core/ordem-producao-operacao/use-cases/produto.mjs'
import { turno } from '../../../core/ordem-producao-operacao/use-cases/turno.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
// import { update } from './update.mjs'

export const ordemProducaoOperacaoUseCases = (dataSource) => ({
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
