import { can } from '@/core/grupo-sujeito/use-cases/can.js'
import { listPermissions } from '@/core/grupo-sujeito/use-cases/list-permissions.js'
import { usuarioController } from '@/core/usuario/usuario_controller.js'
import { TDataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const grupoSujeitoUseCases = (dataSource: TDataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
  count: count(dataSource),
  update: update(dataSource),
  create: create(dataSource),
  del: del(dataSource),
  listPermissions: listPermissions(dataSource),
  can: can(dataSource, { usuarioController }),
})
