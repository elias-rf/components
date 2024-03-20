import { TDataSource } from '@/data/index.js'
import { TEtiquetaExternaDtoFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TEtiquetaExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.count(args)
  }
