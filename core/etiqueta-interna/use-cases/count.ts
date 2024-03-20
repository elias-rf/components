import { TDataSource } from '@/data/index.js'
import { TEtiquetaInternaDtoFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TCount } from '@/types/index.js'

export const count =
  (dataSource: TDataSource): TCount<TEtiquetaInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.count(args)
  }
