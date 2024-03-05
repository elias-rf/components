import { usuarioUseCases } from '@/core/usuario/use-cases/index.js'

export const usuarioController = {
  usuario_list: usuarioUseCases.list,
  usuario_read: usuarioUseCases.read,
  usuario_count: usuarioUseCases.count,
  usuario_update: usuarioUseCases.update,
  usuario_create: usuarioUseCases.create,
  usuario_del: usuarioUseCases.del,
  usuario_me: usuarioUseCases.me,
  usuario_login: usuarioUseCases.login,
}
