import { transferenciaDiario } from '../../../core/nf-saida/use-cases/transferencia-diario.mjs'
import { transferenciaMensal } from '../../../core/nf-saida/use-cases/transferencia-mensal.mjs'
import { transferenciaModelo } from '../../../core/nf-saida/use-cases/transferencia-modelo.mjs'
import { vendaAnalitico } from '../../../core/nf-saida/use-cases/venda-analitico.mjs'
import { vendaDiario } from '../../../core/nf-saida/use-cases/venda-diario.mjs'
import { vendaMensalCliente } from '../../../core/nf-saida/use-cases/venda-mensal-cliente.mjs'

import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const nfSaidaUseCases = (dataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  vendaMensalCliente: vendaMensalCliente(dataSource),
  vendaDiario: vendaDiario(dataSource),
  vendaAnalitico: vendaAnalitico(dataSource),
  transferenciaDiario: transferenciaDiario(dataSource),
  transferenciaMensal: transferenciaMensal(dataSource),
  transferenciaModelo: transferenciaModelo(dataSource),
})
