import { TDataSource } from '@/data/index.js'
import { TReceberDtoFields } from '@/data/plano/receber/receber.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TReceberDtoFields> =>
  async (args) => {
    return dataSource.plano.receber.list(args)
  }
