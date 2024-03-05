import { TClienteDtoFields } from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource['plano']['cliente']): TList<TClienteDtoFields> =>
  async (args) => {
    return dataSource.list(args)
  }
