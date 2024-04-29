import { dataSource } from '../../data/index.mjs'
import { agendaTelefoneUseCases } from './use-cases/index.mjs'

const useCases = agendaTelefoneUseCases(dataSource)

export const agendaTelefoneController = {
  agendaTelefone_list: useCases.list,
  agendaTelefone_read: useCases.read,
  agendaTelefone_count: useCases.count,
  agendaTelefone_update: useCases.update,
  agendaTelefone_create: useCases.create,
  agendaTelefone_del: useCases.del,
}
