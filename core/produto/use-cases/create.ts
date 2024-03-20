import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/oftalmo/produto/produto.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.produto.create(args)
  }
