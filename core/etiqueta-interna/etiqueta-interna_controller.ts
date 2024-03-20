import { dataSource } from '@/data/index.js'
import { etiquetaInternaUseCases } from './use-cases/index.js'

const useCases = etiquetaInternaUseCases(dataSource)

export const etiquetaInternaController = {
  etiquetaInterna_list: useCases.list,
  etiquetaInterna_read: useCases.read,
  etiquetaInterna_count: useCases.count,
  etiquetaInterna_update: useCases.update,
  etiquetaInterna_create: useCases.create,
  etiquetaInterna_del: useCases.del,
}

export type TEtiquetaInternaController = typeof etiquetaInternaController
