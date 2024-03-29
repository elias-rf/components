import { TDataSource } from '@/data/index.js'
import { TGrupoSujeitoDtoFields } from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TGrupoSujeitoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.count(args)
  }
