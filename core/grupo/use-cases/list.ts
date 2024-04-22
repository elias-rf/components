import { TDataSource } from '@/data/index.js'
import { TGrupoDtoFields } from '@/data/oftalmo/grupo/grupo.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TGrupoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupo.list(args)
  }
