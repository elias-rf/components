import { TUsuarioDtoFields } from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource['oftalmo']['usuario']): TCount<TUsuarioDtoFields> =>
  async (args) => {
    return dataSource.count(args)
  }
