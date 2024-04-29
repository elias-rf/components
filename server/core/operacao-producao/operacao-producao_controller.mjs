import { dataSource } from '../../data/index.mjs'
import { operacaoProducaoUseCases } from './use-cases/index.mjs'

const useCases = operacaoProducaoUseCases(dataSource)

export const operacaoProducaoController = {
  operacaoProducao_list: useCases.list,
  operacaoProducao_read: useCases.read,
}
