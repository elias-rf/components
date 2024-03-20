import { TDataSource } from '@/data/index.js'
import { TProdutoControleDtoFields } from '@/data/plano/produto-controle/produto-controle.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TProdutoControleDtoFields> =>
  async (args) => {
    return dataSource.plano.produtoControle.count(args)
  }
