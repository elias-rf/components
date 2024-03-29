import { count } from '@/core/cliente/use-cases/count.js'
import { create } from '@/core/cliente/use-cases/create.js'
import { del } from '@/core/cliente/use-cases/del.js'
import { list } from '@/core/cliente/use-cases/list.js'
import { read } from '@/core/cliente/use-cases/read.js'
import { update } from '@/core/cliente/use-cases/update.js'
import { vendaMensalQuantidade } from '@/core/cliente/use-cases/venda-mensal-quantidade.js'
import { vendaMensalValorMedio } from '@/core/cliente/use-cases/venda-mensal-valor-medio.js'
import { vendaMensalValor } from '@/core/cliente/use-cases/venda-mensal-valor.js'
import { modules } from '@/core/index.js'
import { TNfSaidaController } from '@/core/nf-saida/nf-saida.controller.js'
import { TDataSource } from '@/data/index.js'

export const clienteUseCases = (
  dataSource: TDataSource,
  { nfSaidaController }: { nfSaidaController: TNfSaidaController }
) => ({
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
