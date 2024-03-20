import { TDataSource } from '@/data/index.js'
import { TEtiquetaInternaDtoFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.type.js'
import { TList } from '@/types/index.js'

export const list =
  (dataSource: TDataSource): TList<TEtiquetaInternaDtoFields> =>
  async (args) => {
    return dataSource.oftalmo.etiquetaInterna.list(args)
  }
