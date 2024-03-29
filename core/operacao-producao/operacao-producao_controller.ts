import { dataSource } from '@/data/index.js'
import { operacaoProducaoUseCases } from './use-cases/index.js'

const useCases = operacaoProducaoUseCases(dataSource)

export const operacaoProducaoController = {
  operacaoProducao_list: useCases.list,
  operacaoProducao_read: useCases.read,
}
