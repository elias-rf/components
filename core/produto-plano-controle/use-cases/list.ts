import { TDataSource } from '@/data/index.js'
import { TProdutoControleDtoFields } from '@/data/plano/produto-controle/produto-controle.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TProdutoControleDtoFields> =>
  async (args) => {
    return dataSource.plano.produtoControle.list(args)
  }
