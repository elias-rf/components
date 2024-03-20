import { TDataSource } from '@/data/index.js'
import {
  TEtiquetaInternaDtoFields,
  TEtiquetaInternaDtoKeys,
} from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TDel } from '@/types/index.js'

export const del =
  (
    dataSource: TDataSource
  ): TDel<TEtiquetaInternaDtoFields, TEtiquetaInternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.del(args)
  }
