import { TDataSource } from '@/data/index.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoDtoKeys,
} from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TGrupoSujeitoDtoFields, TGrupoSujeitoDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.grupoSujeito.read(args)
  }
