import { TClienteDtoFields } from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource['plano']['cliente']): TCreate<TClienteDtoFields> =>
  async (args) => {
    return dataSource.create(args)
  }
