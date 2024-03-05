import { clienteUseCases } from '@/core/cliente/use-cases/index.js'

export const clienteController = {
  cliente_list: clienteUseCases.list,
  cliente_read: clienteUseCases.read,
  cliente_count: clienteUseCases.count,
  cliente_update: clienteUseCases.update,
  cliente_create: clienteUseCases.create,
  cliente_del: clienteUseCases.del,
  cliente_vendaMensalQuantidade: clienteUseCases.vendaMensalQuantidade,
  cliente_vendaMensalValor: clienteUseCases.vendaMensalValor,
  cliente_vendaMensalValorMedio: clienteUseCases.vendaMensalValorMedio,
}
