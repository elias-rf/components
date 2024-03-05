import { TUsuarioDtoFields } from '@/core/usuario/usuario.type.js'
import { TDataSource } from '@/data/index.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource['oftalmo']['usuario']): TList<TUsuarioDtoFields> =>
  async (args) => {
    return dataSource.list(args)
  }
