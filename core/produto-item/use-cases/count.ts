import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoFields } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TProdutoItemDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.count(args)
  }
