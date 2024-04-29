import { dataSource } from '../../data/index.mjs'
import { ordemProducaoOperacaoUseCases } from './use-cases/index.mjs'

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
