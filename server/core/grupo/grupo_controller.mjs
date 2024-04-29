import { dataSource } from '../../data/index.mjs'
import { grupoUseCases } from './use-cases/index.mjs'

const useCases = grupoUseCases(dataSource)

export const grupoController = {
  grupo_list: useCases.list,
  grupo_read: useCases.read,
  grupo_count: useCases.count,
  grupo_update: useCases.update,
  grupo_create: useCases.create,
  grupo_del: useCases.del,
}
