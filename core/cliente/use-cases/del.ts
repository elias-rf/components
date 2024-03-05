import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource['plano']['cliente']
  ): TDel<TClienteDtoFields, TClienteDtoKeys> =>
  async (args) => {
    return dataSource.del(args)
  }
