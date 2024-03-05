import { agendaTelefoneUseCases } from '@/core/agenda-telefone/use-cases/index.js'

export const agendaTelefoneController = {
  agendaTelefone_list: agendaTelefoneUseCases.list,
  agendaTelefone_read: agendaTelefoneUseCases.read,
  agendaTelefone_count: agendaTelefoneUseCases.count,
  agendaTelefone_update: agendaTelefoneUseCases.update,
  agendaTelefone_create: agendaTelefoneUseCases.create,
  agendaTelefone_del: agendaTelefoneUseCases.del,
}
