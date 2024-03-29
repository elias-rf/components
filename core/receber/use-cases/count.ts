import { TDataSource } from '@/data/index.js'
import { TReceberDtoFields } from '@/data/plano/receber/receber.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TReceberDtoFields> =>
  async (args) => {
    return dataSource.plano.receber.count(args)
  }
