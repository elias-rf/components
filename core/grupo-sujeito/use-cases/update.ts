import { TDataSource } from '@/data/index.js'
import { TGrupoSujeitoDtoFields } from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TGrupoSujeitoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.update(args)
  }
