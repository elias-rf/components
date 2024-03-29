import { TDataSource } from '@/data/index.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoDtoKeys,
} from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TGrupoSujeitoDtoFields, TGrupoSujeitoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.del(args)
  }
