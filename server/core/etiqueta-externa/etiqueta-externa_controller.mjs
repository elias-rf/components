import { dataSource } from '../../data/index.mjs'
import { etiquetaExternaUseCases } from './use-cases/index.mjs'

const useCases = etiquetaExternaUseCases(dataSource)

export const etiquetaExternaController = {
  etiquetaExterna_list: useCases.list,
  etiquetaExterna_read: useCases.read,
  etiquetaExterna_count: useCases.count,
  etiquetaExterna_update: useCases.update,
  etiquetaExterna_create: useCases.create,
  etiquetaExterna_del: useCases.del,
}
