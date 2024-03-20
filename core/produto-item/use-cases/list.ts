import { TDataSource } from '@/data/index.js'
import { TProdutoItemDtoFields } from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TProdutoItemDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.list(args)
  }
