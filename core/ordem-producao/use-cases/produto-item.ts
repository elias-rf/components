import { TProdutoItemController } from '@/core/produto-item/produto-item_controller.js'
import { TDataSource, dataSource } from '@/data/index.js'
import {
  TProdutoItemDtoFields,
  TProdutoItemFields,
} from '@/data/oftalmo/produto-item/produto-item.type.js'
import { read } from './read.js'
/**
 * Retrieves a specific product item based on its ID.
 *
 * @param {Object} args - An object containing the ID of the product item to retrieve and an optional array of fields to select.
 * @param {TId} args.id - The ID of the product item to retrieve.
 * @param {TSelect} [args.select] - An optional array of fields to select.
 * @return {Promise<Object>} - A promise that resolves to the product item object with the specified ID and selected fields (if provided).
 */
export const produtoItem =
  (
    dataSource: TDataSource,
    {
      produtoItemController,
    }: {
      produtoItemController: TProdutoItemController
    }
  ) =>
  async ({
    id,
    select,
  }: {
    id: [['id', number]]
    select?: Array<TProdutoItemDtoFields>
  }): Promise<Record<TProdutoItemFields, any> | object> => {
    const readUseCase = read(dataSource)
    const ordemProducao = await readUseCase({
      where: [['id', id[0][1]]],
      select: ['produtoItemId'],
    })

    if (ordemProducao.produtoItemId === undefined) {
      return {}
    }
    return produtoItemController.produtoItem_read({
      where: [['id', ordemProducao.produtoItemId]],
      select,
    })
  }
