import { TDataSource } from '@/data/index.js'
import { TClienteDtoFields } from '@/data/plano/cliente/cliente.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TClienteDtoFields> =>
  async (args) => {
    return dataSource.plano.cliente.update(args)
  }
