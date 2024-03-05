import { TUsuarioDtoFields } from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource['oftalmo']['usuario']): TCreate<TUsuarioDtoFields> =>
  async (args) => {
    return dataSource.create(args)
  }
