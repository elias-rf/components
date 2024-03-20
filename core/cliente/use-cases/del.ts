import { TDataSource } from '@/data/index.js'
import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/data/plano/cliente/cliente.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TClienteDtoFields, TClienteDtoKeys> =>
  async (args) => {
    return dataSource.plano.cliente.del(args)
  }
