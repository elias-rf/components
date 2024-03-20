import { TDataSource } from '@/data/index.js'
import { TClienteDtoFields } from '@/data/plano/cliente/cliente.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TClienteDtoFields> =>
  async (args) => {
    return dataSource.plano.cliente.list(args)
  }
