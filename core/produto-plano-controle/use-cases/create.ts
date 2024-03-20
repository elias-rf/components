import { TDataSource } from '@/data/index.js'
import { TProdutoControleDtoFields } from '@/data/plano/produto-controle/produto-controle.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TProdutoControleDtoFields> =>
  async (args) => {
    return dataSource.plano.produtoControle.create(args)
  }
