import { TDataSource } from '@/data/index.js'
import { TEtiquetaExternaDtoFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TEtiquetaExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.update(args)
  }
