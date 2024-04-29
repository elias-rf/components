import { nfSaidaUseCases } from '../../core/nf-saida/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = nfSaidaUseCases(dataSource)

export const nfSaidaController = {
  nfSaida_list: useCases.list,
  nfSaida_read: useCases.read,
  nfSaida_count: useCases.count,
  nfSaida_update: useCases.update,
  nfSaida_create: useCases.create,
  nfSaida_del: useCases.del,
  nfSaida_vendaMensalCliente: useCases.vendaMensalCliente,
  nfSaida_vendaDiario: useCases.vendaDiario,
  nfSaida_vendaAnalitico: useCases.vendaAnalitico,
  nfSaida_transferenciaDiario: useCases.transferenciaDiario,
  nfSaida_transferenciaMensal: useCases.transferenciaMensal,
  nfSaida_transferenciaModelo: useCases.transferenciaModelo,
}
