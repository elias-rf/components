import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource['oftalmo']['usuario']
  ): TDel<TUsuarioDtoFields, TUsuarioDtoKeys> =>
  async (args) => {
    return dataSource.del(args)
  }
