import { TDataSource } from '@/data/index.js'
import { TEtiquetaExternaDtoFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TEtiquetaExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.create(args)
  }
