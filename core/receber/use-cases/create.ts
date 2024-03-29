import { TDataSource } from '@/data/index.js'
import { TReceberDtoFields } from '@/data/plano/receber/receber.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TReceberDtoFields> =>
  async (args) => {
    return dataSource.plano.receber.create(args)
  }
