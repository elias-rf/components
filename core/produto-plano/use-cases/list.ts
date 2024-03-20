import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TProdutoDtoFields> =>
  async (args) => {
    return dataSource.plano.produto.list(args)
  }
