import { TDataSource } from '@/data/index.js'
import {
  TEtiquetaInternaDtoFields,
  TEtiquetaInternaDtoKeys,
} from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TRead } from '@/types/index.js'

export const read =
  (
    dataSource: TDataSource
  ): TRead<TEtiquetaInternaDtoFields, TEtiquetaInternaDtoKeys> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.read(args)
  }
