import { TDataSource } from '@/data/index.js'
import {
  TReceberDtoFields,
  TReceberDtoKeys,
} from '@/data/plano/receber/receber.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TReceberDtoFields, TReceberDtoKeys> =>
  async (args) => {
    return dataSource.plano.receber.del(args)
  }
