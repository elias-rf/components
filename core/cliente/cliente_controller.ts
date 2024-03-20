import { clienteUseCases } from '@/core/cliente/use-cases/index.js'
import { nfSaidaController } from '@/core/nf-saida/nf-saida_controller.js'
import { dataSource } from '@/data/index.js'

const useCases = clienteUseCases(dataSource, { nfSaidaController })

export const clienteController = {
  cliente_list: useCases.list,
  cliente_read: useCases.read,
  cliente_count: useCases.count,
  cliente_update: useCases.update,
  cliente_create: useCases.create,
  cliente_del: useCases.del,
  cliente_vendaMensalQuantidade: useCases.vendaMensalQuantidade,
  cliente_vendaMensalValor: useCases.vendaMensalValor,
  cliente_vendaMensalValorMedio: useCases.vendaMensalValorMedio,
}
