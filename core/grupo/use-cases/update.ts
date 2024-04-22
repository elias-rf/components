import { TDataSource } from '@/data/index.js'
import { TGrupoDtoFields } from '@/data/oftalmo/grupo/grupo.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TGrupoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupo.update(args)
  }
