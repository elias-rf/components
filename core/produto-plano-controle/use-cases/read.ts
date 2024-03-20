import { TDataSource } from '@/data/index.js'
import {
  TProdutoControleDtoFields,
  TProdutoControleDtoKeys,
} from '@/data/plano/produto-controle/produto-controle.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TProdutoControleDtoFields, TProdutoControleDtoKeys> =>
  async (args) => {
    return dataSource.plano.produtoControle.read(args)
  }
