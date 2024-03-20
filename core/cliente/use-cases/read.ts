import { TDataSource } from '@/data/index.js'
import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/data/plano/cliente/cliente.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TClienteDtoFields, TClienteDtoKeys> =>
  async (args) => {
    return dataSource.plano.cliente.read(args)
  }
