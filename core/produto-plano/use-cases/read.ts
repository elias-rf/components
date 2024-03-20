import { TDataSource } from '@/data/index.js'
import {
  TProdutoDtoFields,
  TProdutoDtoKeys,
} from '@/data/plano/produto/produto.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TProdutoDtoFields, TProdutoDtoKeys> =>
  async (args) => {
    return dataSource.plano.produto.read(args)
  }
