import { TDataSource } from '@/data/index.js'
import {
  TEtiquetaExternaDtoFields,
  TEtiquetaExternaDtoKeys,
} from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TEtiquetaExternaDtoFields, TEtiquetaExternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.del(args)
  }
