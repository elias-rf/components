import { planoDb } from '../data/plano/plano.db.mjs'
import { ormTable } from '../utils/orm/orm-table.mjs'

export const cidadeSchema = {
  table: 'cidadesERF',
  primary: ['CdCidadeIBGE'],
  fields: ['CdUFIBGE', 'CdCidadeIBGE', 'NmCidadeIBGE', 'uf', 'ufOld'],
}

function cidadeControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    cidade_list: orm.rpc.list,
    cidade_read: orm.rpc.read,
    cidade_count: orm.rpc.count,
    cidade_update: orm.rpc.update,
    cidade_create: orm.rpc.create,
    cidade_del: orm.rpc.del,
    cidade_increment: orm.rpc.increment,
  }
}

export const cidadeController = cidadeControllerFactory(planoDb, cidadeSchema)
