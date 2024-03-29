import { TDataSource } from '@/data/index.js'
import { TReceberDtoFields } from '@/data/plano/receber/receber.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TReceberDtoFields> =>
  async (args) => {
    return dataSource.plano.receber.update(args)
  }
