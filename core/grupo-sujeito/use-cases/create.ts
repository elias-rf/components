import { TDataSource } from '@/data/index.js'
import { TGrupoSujeitoDtoFields } from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TGrupoSujeitoDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.create(args)
  }
