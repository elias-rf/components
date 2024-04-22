import { TDataSource } from '@/data/index.js'
import {
  TGrupoDtoFields,
  TGrupoDtoKeys,
} from '@/data/oftalmo/grupo/grupo.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (dataSource: TDataSource): TDel<TGrupoDtoFields, TGrupoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.grupo.del(args)
  }
