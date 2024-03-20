import { dataSource } from '@/data/index.js'
import { etiquetaExternaUseCases } from './use-cases/index.js'

const useCases = etiquetaExternaUseCases(dataSource)

export const etiquetaExternaController = {
  etiquetaExterna_list: useCases.list,
  etiquetaExterna_read: useCases.read,
  etiquetaExterna_count: useCases.count,
  etiquetaExterna_update: useCases.update,
  etiquetaExterna_create: useCases.create,
  etiquetaExterna_del: useCases.del,
}

export type TEtiquetaExternaController = typeof etiquetaExternaController
