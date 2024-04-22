import { TDataSource } from '@/data/index.js'
import {
  TGrupoDtoFields,
  TGrupoDtoKeys,
} from '@/data/oftalmo/grupo/grupo.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (dataSource: TDataSource): TRead<TGrupoDtoFields, TGrupoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.grupo.read(args)
  }
