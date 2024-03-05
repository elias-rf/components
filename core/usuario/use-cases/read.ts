import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource['oftalmo']['usuario']
  ): TRead<TUsuarioDtoFields, TUsuarioDtoKeys> =>
  async (args) => {
    return dataSource.read(args)
  }
