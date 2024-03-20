import { TDataSource } from '@/data/index.js'
import {
  TProdutoDtoFields,
  TProdutoDtoKeys,
} from '@/data/oftalmo/produto/produto.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TProdutoDtoFields, TProdutoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.produto.read(args)
  }
