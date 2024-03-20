import { TDataSource } from '@/data/index.js'
import {
  TEtiquetaExternaDtoFields,
  TEtiquetaExternaDtoKeys,
} from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TEtiquetaExternaDtoFields, TEtiquetaExternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaExterna.read(args)
  }
