import { TDataSource } from '@/data/index.js'
import {
  TReceberDtoFields,
  TReceberDtoKeys,
} from '@/data/plano/receber/receber.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TReceberDtoFields, TReceberDtoKeys> =>
  async (args) => {
    return dataSource.plano.receber.read(args)
  }
