import { TClienteDtoFields } from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource['plano']['cliente']): TUpdate<TClienteDtoFields> =>
  async (args) => {
    return dataSource.update(args)
  }
