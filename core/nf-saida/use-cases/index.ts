import { transferenciaDiario } from '@/core/nf-saida/use-cases/transferencia-diario.js'
import { transferenciaMensal } from '@/core/nf-saida/use-cases/transferencia-mensal.js'
import { transferenciaModelo } from '@/core/nf-saida/use-cases/transferencia-modelo.js'
import { vendaAnalitico } from '@/core/nf-saida/use-cases/venda-analitico.js'
import { vendaDiario } from '@/core/nf-saida/use-cases/venda-diario.js'
import { vendaMensalCliente } from '@/core/nf-saida/use-cases/venda-mensal-cliente.js'
import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const nfSaidaUseCases = (dataSource: TDataSource) => ({
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
