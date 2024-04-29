import { nfSaidaController } from '../../core/nf-saida/nf-saida.controller.mjs'
import { dataSource } from '../../data/index.mjs'
import { clienteUseCases } from './use-cases/index.mjs'

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
