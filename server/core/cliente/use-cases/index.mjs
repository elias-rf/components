import { count } from '../../../core/cliente/use-cases/count.mjs'
import { create } from '../../../core/cliente/use-cases/create.mjs'
import { del } from '../../../core/cliente/use-cases/del.mjs'
import { list } from '../../../core/cliente/use-cases/list.mjs'
import { read } from '../../../core/cliente/use-cases/read.mjs'
import { update } from '../../../core/cliente/use-cases/update.mjs'
import { vendaMensalQuantidade } from '../../../core/cliente/use-cases/venda-mensal-quantidade.mjs'
import { vendaMensalValorMedio } from '../../../core/cliente/use-cases/venda-mensal-valor-medio.mjs'
import { vendaMensalValor } from '../../../core/cliente/use-cases/venda-mensal-valor.mjs'

export const clienteUseCases = (dataSource, { nfSaidaController }) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  vendaMensalQuantidade: vendaMensalQuantidade({ nfSaidaController }),
  vendaMensalValor: vendaMensalValor({ nfSaidaController }),
  vendaMensalValorMedio: vendaMensalValorMedio({ nfSaidaController }),
})
