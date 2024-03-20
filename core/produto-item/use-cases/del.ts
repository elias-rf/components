import { TDataSource } from '@/data/index.js'
import {
  TProdutoItemDtoFields,
  TProdutoItemDtoKeys,
} from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TProdutoItemDtoFields, TProdutoItemDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.del(args)
  }
