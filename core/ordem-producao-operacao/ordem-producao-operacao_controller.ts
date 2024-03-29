import { dataSource } from '@/data/index.js'
import { ordemProducaoOperacaoUseCases } from './use-cases/index.js'

const useCases = ordemProducaoOperacaoUseCases(dataSource)

export const ordemProducaoOperacaoController = {
  ordemProducaoOperacao_list: useCases.list,
  ordemProducaoOperacao_diario: useCases.diario,
  ordemProducaoOperacao_mensal: useCases.mensal,
  ordemProducaoOperacao_modelo: useCases.modelo,
  ordemProducaoOperacao_produto: useCases.produto,
  ordemProducaoOperacao_read: useCases.read,
  ordemProducaoOperacao_turno: useCases.turno,
}

export type TOrdemProducaoOperacaoController =
  typeof ordemProducaoOperacaoController
