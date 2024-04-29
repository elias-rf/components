import { can } from '../../../core/grupo-sujeito/use-cases/can.mjs'
import { listPermissions } from '../../../core/grupo-sujeito/use-cases/list-permissions.mjs'
import { usuarioController } from '../../../core/usuario/usuario_controller.mjs'

import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const grupoSujeitoUseCases = (dataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  listPermissions: listPermissions(dataSource),
  can: can(dataSource, { usuarioController }),
})
