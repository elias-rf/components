import { produtoItemUseCases } from '../../core/produto-item/use-cases/index.mjs'
import { produtoPlanoController } from '../../core/produto-plano/produto-plano_controller.mjs'
import { dataSource } from '../../data/index.mjs'

// export const produtoItemControllerFactory(db, schema) {
//   const orm = ormTable<TProdutoItemDtoFields, TProdutoItemDtoKeys>(db, schema)

const useCases = produtoItemUseCases(dataSource, { produtoPlanoController })

export const produtoItemController = {
  produtoItem_count: useCases.count,
  produtoItem_create: useCases.create,
  produtoItem_del: useCases.del,
  produtoItem_list: useCases.list,
  produtoItem_produtoPlano: useCases.produtoPlano,
  produtoItem_read: useCases.read,
  produtoItem_update: useCases.update,
}
