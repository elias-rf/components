import { etiquetaExternaController } from '@/core/etiqueta-externa/etiqueta-externa_controller.js'
import { ordemProducaoOperacaoController } from '@/core/ordem-producao-operacao/ordem-producao-operacao_controller.js'
import { produtoItemController } from '@/core/produto-item/produto-item_controller.js'
import { dataSource } from '@/data/index.js'
import { ordemProducaoUseCases } from './use-cases/index.js'

const useCases = ordemProducaoUseCases(dataSource, {
  ordemProducaoOperacaoController,
  etiquetaExternaController,
  produtoItemController,
})

export const ordemProducaoController = {
  ordemProducao_controle: useCases.controle,
  ordemProducao_dataFabricacao: useCases.dataFabricacao,
  ordemProducao_dataValidade: useCases.dataValidade,
  ordemProducao_ehControleValido: useCases.ehControleValido,
  ordemProducao_etiquetaExtena: useCases.etiquetaExterna,
  ordemProducao_fromControle: useCases.fromControle,
  ordemProducao_list: useCases.list,
  ordemProducao_produtoItem: useCases.produtoItem,
  ordemProducao_produtoPlano: useCases.produtoPlano,
  ordemProducao_read: useCases.read,
}

export type TOrdemProducaoController = typeof ordemProducaoController
