import { produtoPlanoControleUseCases } from '../../core/produto-plano-controle/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = produtoPlanoControleUseCases(dataSource)

export const produtoPlanoControleController = {
  produtoPlanoControle_count: useCases.count,
  produtoPlanoControle_create: useCases.create,
  produtoPlanoControle_del: useCases.del,
  produtoPlanoControle_list: useCases.list,
  produtoPlanoControle_read: useCases.read,
  produtoPlanoControle_update: useCases.update,
}
