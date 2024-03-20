import { produtoItemUseCases } from '@/core/produto-item/use-cases/index.js'
import { produtoPlanoController } from '@/core/produto-plano/produto-plano_controller.js'
import { dataSource } from '@/data/index.js'

// export const produtoItemControllerFactory(db: TAdapterKnex, schema: TSchema) {
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

export type TProdutoItemController = typeof produtoItemController
