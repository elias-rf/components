import { produtoPlanoControleUseCases } from '@/core/produto-plano-controle/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = produtoPlanoControleUseCases(dataSource)

export const produtoPlanoControleController = {
  produtoPlanoControle_count: useCases.count,
  produtoPlanoControle_create: useCases.create,
  produtoPlanoControle_del: useCases.del,
  produtoPlanoControle_list: useCases.list,
  produtoPlanoControle_read: useCases.read,
  produtoPlanoControle_update: useCases.update,
}

export type TProdutoPlanoControleController =
  typeof produtoPlanoControleController
