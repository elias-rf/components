import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.plano.produto.create(args)
  }
