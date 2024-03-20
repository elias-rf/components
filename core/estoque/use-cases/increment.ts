import { TDataSource } from '@/data/index.js'
import { TEstoqueDtoFields } from '@/data/plano/estoque/estoque.type.js'
import { TIncrement } from '@/types/index.js'

export const increment =
  (dataSource: TDataSource): TIncrement<TEstoqueDtoFields> =>
  async (args) => {
    return dataSource.plano.estoque.increment(args)
  }
