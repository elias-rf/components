import { usuarioUseCases } from '@/core/usuario/use-cases/index.js'
import { dataSource } from '@/data/index.js'

const useCases = usuarioUseCases(dataSource)

export const usuarioController = {
  usuario_list: useCases.list,
  usuario_read: useCases.read,
  usuario_count: useCases.count,
  usuario_update: useCases.update,
  usuario_create: useCases.create,
  usuario_del: useCases.del,
  usuario_me: useCases.me,
  usuario_login: useCases.login,
}

export type TUsuarioController = typeof usuarioController
