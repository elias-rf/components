import { TDataSource } from '@/data/index.js'
import { TGrupoDtoFields } from '@/data/oftalmo/grupo/grupo.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TGrupoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupo.create(args)
  }
