import { TDataSource } from '@/data/index.js'
import { TGrupoDtoFields } from '@/data/oftalmo/grupo/grupo.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TGrupoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupo.count(args)
  }
