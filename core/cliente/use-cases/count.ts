import { TDataSource } from '@/data/index.js'
import { TClienteDtoFields } from '@/data/plano/cliente/cliente.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TClienteDtoFields> =>
  async (args) => {
    return dataSource.plano.cliente.count(args)
  }
