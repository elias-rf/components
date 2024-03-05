import { dataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { login } from './login.js'
import { me } from './me.js'
import { read } from './read.js'
import { update } from './update.js'

export const usuarioUseCases = {
  list: list(dataSource.oftalmo.usuario),
  read: read(dataSource.oftalmo.usuario),
  count: count(dataSource.oftalmo.usuario),
  update: update(dataSource.oftalmo.usuario),
  create: create(dataSource.oftalmo.usuario),
  del: del(dataSource.oftalmo.usuario),
  me: me(dataSource.oftalmo.usuario),
  login: login(dataSource.oftalmo.usuario),
}
