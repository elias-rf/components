import { count } from '@/core/cliente/use-cases/count.js'
import { create } from '@/core/cliente/use-cases/create.js'
import { del } from '@/core/cliente/use-cases/del.js'
import { list } from '@/core/cliente/use-cases/list.js'
import { read } from '@/core/cliente/use-cases/read.js'
import { update } from '@/core/cliente/use-cases/update.js'
import { vendaMensalQuantidade } from '@/core/cliente/use-cases/venda-mensal-quantidade.js'
import { vendaMensalValorMedio } from '@/core/cliente/use-cases/venda-mensal-valor-medio.js'
import { vendaMensalValor } from '@/core/cliente/use-cases/venda-mensal-valor.js'
import { dataSource } from '@/data/index.js'

export const clienteUseCases = {
  list: list(dataSource.plano.cliente),
  read: read(dataSource.plano.cliente),
  count: count(dataSource.plano.cliente),
  update: update(dataSource.plano.cliente),
  create: create(dataSource.plano.cliente),
  del: del(dataSource.plano.cliente),
  vendaMensalQuantidade: vendaMensalQuantidade(dataSource.plano.cliente),
  vendaMensalValor: vendaMensalValor(dataSource.plano.cliente),
  vendaMensalValorMedio: vendaMensalValorMedio(dataSource.plano.cliente),
}
