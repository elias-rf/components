import { dataSource } from '../../data/index.mjs'
import { receberUseCases } from './use-cases/index.mjs'

const useCases = receberUseCases(dataSource)

export const receberController = {
  receber_list: useCases.list,
  receber_read: useCases.read,
  receber_count: useCases.count,
  receber_update: useCases.update,
  receber_create: useCases.create,
  receber_del: useCases.del,
}
