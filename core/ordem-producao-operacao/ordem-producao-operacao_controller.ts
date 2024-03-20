import { dataSource } from '@/data/index.js'
import { ordemProducaoOperacaoUseCases } from './use-cases/index.js'

const useCases = ordemProducaoOperacaoUseCases(dataSource)

export const ordemProducaoOperacaoController = {
  ordemProducaoOperacao_list: useCases.list,
}

export type TOrdemProducaoOperacaoController =
  typeof ordemProducaoOperacaoController
