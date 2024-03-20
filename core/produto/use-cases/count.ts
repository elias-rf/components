import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/oftalmo/produto/produto.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produto.count(args)
  }
