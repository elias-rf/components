import { TUsuarioDtoFields } from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource['oftalmo']['usuario']): TUpdate<TUsuarioDtoFields> =>
  async (args) => {
    return dataSource.update(args)
  }
