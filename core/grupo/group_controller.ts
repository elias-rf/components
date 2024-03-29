import { dataSource } from '@/data/index.js'
import { groupUseCases } from './use-cases/index.js'

const useCases = groupUseCases(dataSource)

export const groupController = {
  group_list: useCases.list,
  group_read: useCases.read,
  group_count: useCases.count,
  group_update: useCases.update,
  group_create: useCases.create,
  group_del: useCases.del,
}
