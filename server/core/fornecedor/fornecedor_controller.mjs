import { fornecedorUseCases } from '../../core/fornecedor/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = fornecedorUseCases(dataSource)

export const fornecedorController = {
  fornecedor_list: useCases.list,
  fornecedor_read: useCases.read,
  fornecedor_count: useCases.count,
  fornecedor_update: useCases.update,
  fornecedor_create: useCases.create,
  fornecedor_del: useCases.del,
}
