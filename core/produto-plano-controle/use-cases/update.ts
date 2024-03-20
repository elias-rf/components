import { TDataSource } from '@/data/index.js'
import { TProdutoControleDtoFields } from '@/data/plano/produto-controle/produto-controle.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TProdutoControleDtoFields> =>
  async (args) => {
    return dataSource.plano.produtoControle.update(args)
  }
