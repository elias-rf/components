import { produtoItem } from '@/core/ordem-producao/use-cases/produto-item.js'
import { TProdutoItemController } from '@/core/produto-item/produto-item_controller.js'
import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoFields } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'

/**
 * Retrieves a product plan by its ID from the database.
 *
 * @async
 * @param {object} args - The arguments object.
 * @param {TId} args.id - The ID of the product plan.
 * @param {TSelect} [args.select] - The fields to select.
 * @return {Promise<unknown>} The product plan.
 */
export const produtoPlano =
  (
    dataSource: TDataSource,
    { produtoItemController }: { produtoItemController: TProdutoItemController }
  ) =>
  async ({
    id,
    select,
  }: {
    id: [['id', number]]
    select?: Array<TProdutoDtoFields>
  }): Promise<Record<TProdutoDtoFields, any> | object> => {
    const produtoItemUseCase = produtoItem(dataSource, {
      produtoItemController,
    })
    const produtoItemId = (await produtoItemUseCase({
      id: [['id', id[0][1]]],
      select: ['id'],
    })) as Record<TProdutoItemDtoFields, any>

    if (produtoItemId.id === undefined) {
      return {}
    }
    return await produtoItemController.produtoItem_produtoPlano({
      id: [['id', produtoItemId.id]],
      select,
    })
  }
