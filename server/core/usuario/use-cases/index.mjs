import { count } from './count.mjs'
import { create } from './create.mjs'
import { del } from './del.mjs'
import { list } from './list.mjs'
import { login } from './login.mjs'
import { me } from './me.mjs'
import { read } from './read.mjs'
import { update } from './update.mjs'

export const usuarioUseCases = (dataSource) => ({
  list: list(dataSource.oftalmo.usuario),
  read: read(dataSource.oftalmo.usuario),
  count: count(dataSource.oftalmo.usuario),
  update: update(dataSource.oftalmo.usuario),
  create: create(dataSource.oftalmo.usuario),
  del: del(dataSource.oftalmo.usuario),
  me: me(dataSource.oftalmo.usuario),
  login: login(dataSource.oftalmo.usuario),
})
