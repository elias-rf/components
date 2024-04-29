import { produtoItem } from '../../../core/ordem-producao/use-cases/produto-item.mjs'

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
  (dataSource, { produtoItemController }) =>
  async ({ id, select }) => {
    const produtoItemUseCase = produtoItem(dataSource, {
      produtoItemController,
    })
    const produtoItemId = await produtoItemUseCase({
      id: [['id', id[0][1]]],
      select: ['id'],
    })

    if (produtoItemId.id === undefined) {
      return {}
    }
    return await produtoItemController.produtoItem_produtoPlano({
      id: [['id', produtoItemId.id]],
      select,
    })
  }
