import { TDataSource } from '@/data/index.js'
import {
  TProdutoItemDtoFields,
  TProdutoItemDtoKeys,
} from '@/data/oftalmo/produto-item/produto-item.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TProdutoItemDtoFields, TProdutoItemDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.produtoItem.read(args)
  }
