import { TDataSource } from '@/data/index.js'
import { TGrupoSujeitoDtoFields } from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TGrupoSujeitoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.list(args)
  }
