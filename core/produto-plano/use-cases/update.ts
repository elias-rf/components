import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.plano.produto.update(args)
  }
