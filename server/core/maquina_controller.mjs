import { oftalmoDb } from '../data/oftalmo/oftalmo.db.mjs'
import { ormTable } from '../utils/orm/index.mjs'

export const tMaquina = {
  table: 'tMaquina',
  primary: ['kMaquina'],
  fields: [
    'kMaquina',
    'NomeMaquina',
    'Serie',
    'fkDivisao',
    'fkSetor',
    'Descricao',
    'FrequenciaManutencao',
    'Ativo',
  ],
}

function maquinaControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    maquina_list: orm.rpc.list,
    maquina_read: orm.rpc.read,
    maquina_count: orm.rpc.count,
    maquina_update: orm.rpc.update,
    maquina_create: orm.rpc.create,
    maquina_del: orm.rpc.del,
    maquina_increment: orm.rpc.increment,
  }
}

export const maquinaController = maquinaControllerFactory(oftalmoDb, tMaquina)
