import { produtoPlanoUseCases } from '@/core/produto-plano/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = produtoPlanoUseCases(dataSource)

export const produtoPlanoController = {
  // produtoPlano_list: useCases.list,
  produtoPlano_read: useCases.read,
  // produtoPlano_count: useCases.count,
  // produtoPlano_update: useCases.update,
  // produtoPlano_create: useCases.create,
  // produtoPlano_del: useCases.del,
}

export type TProdutoPlanoController = typeof produtoPlanoController
