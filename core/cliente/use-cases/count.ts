import { TClienteDtoFields } from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource['plano']['cliente']): TCount<TClienteDtoFields> =>
  async (args) => {
    return dataSource.count(args)
  }
