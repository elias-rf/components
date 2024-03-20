import { TDataSource } from '@/data/index.js'
import { TEtiquetaExternaDtoFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TEtiquetaExternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.list(args)
  }
