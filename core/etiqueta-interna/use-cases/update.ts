import { TDataSource } from '@/data/index.js'
import { TEtiquetaInternaDtoFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TUpdate } from '@/types/query.js'

export const update =
  (dataSource: TDataSource): TUpdate<TEtiquetaInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.update(args)
  }
