import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoFields } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TProdutoItemDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.update(args)
  }
