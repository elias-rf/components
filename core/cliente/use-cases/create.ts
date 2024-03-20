import { TDataSource } from '@/data/index.js'
import { TClienteDtoFields } from '@/data/plano/cliente/cliente.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TClienteDtoFields> =>
  async (args) => {
    return dataSource.plano.cliente.create(args)
  }
