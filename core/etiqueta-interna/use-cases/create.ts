import { TDataSource } from '@/data/index.js'
import { TEtiquetaInternaDtoFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TCreate } from '@/types/index.js'

export const create =
  (dataSource: TDataSource): TCreate<TEtiquetaInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.create(args)
  }
