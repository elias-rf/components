import { TDataSource } from '@/data/index.js'
import {
  TProdutoControleDtoFields,
  TProdutoControleDtoKeys,
} from '@/data/plano/produto-controle/produto-controle.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TProdutoControleDtoFields, TProdutoControleDtoKeys> =>
  async (args) => {
    return dataSource.plano.produtoControle.del(args)
  }
