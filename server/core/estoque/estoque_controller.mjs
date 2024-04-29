import { estoqueUseCases } from '../../core/estoque/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = estoqueUseCases(dataSource)

export const estoqueController = {
  estoque_list: useCases.list,
  estoque_read: useCases.read,
  estoque_count: useCases.count,
  estoque_update: useCases.update,
  estoque_create: useCases.create,
  estoque_del: useCases.del,
  estoque_increment: useCases.increment,
}
