import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoFields } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TProdutoItemDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.create(args)
  }
