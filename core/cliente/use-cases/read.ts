import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/core/cliente/cliente.type.js'
import { TDataSource } from '@/data/index.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource['plano']['cliente']
  ): TRead<TClienteDtoFields, TClienteDtoKeys> =>
  async (args) => {
    return dataSource.read(args)
  }
