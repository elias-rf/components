import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/oftalmo/produto/produto.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produto.update(args)
  }
