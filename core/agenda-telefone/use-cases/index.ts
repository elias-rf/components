import { dataSource } from '@/data/index.js'
import { count } from './count.js'
import { create } from './create.js'
import { del } from './del.js'
import { list } from './list.js'
import { read } from './read.js'
import { update } from './update.js'

export const agendaTelefoneUseCases = {
  list: list(dataSource.oftalmo.agendaTelefone),
  read: read(dataSource.oftalmo.agendaTelefone),
  count: count(dataSource.oftalmo.agendaTelefone),
  update: update(dataSource.oftalmo.agendaTelefone),
  create: create(dataSource.oftalmo.agendaTelefone),
  del: del(dataSource.oftalmo.agendaTelefone),
}
