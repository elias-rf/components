import { TDataSource } from '@/data/index.js'
import {
  TProdutoDtoFields,
  TProdutoDtoKeys,
} from '@/data/oftalmo/produto/produto.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TProdutoDtoFields, TProdutoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.produto.del(args)
  }
