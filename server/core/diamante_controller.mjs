import { oftalmoDb } from '../data/oftalmo/oftalmo.db.mjs'
import { ormTable } from '../utils/orm/index.mjs'

export const diamanteSchema = {
  table: 'diamante',
  primary: ['id'],
  fields: [
    'id',
    'diamante',
    'tipo',
    'raio',
    'espessura',
    'fkMaquina',
    'fkFuncionario',
    'dataEntrada',
    'ordemInicial',
    'dataSaida',
    'ordemFinal',
    'qtdCortes',
  ],
}

function diamanteControllerFactory(db, schema) {
  const orm = ormTable(db, schema)

  return {
    diamante_list: orm.rpc.list,
    diamante_read: orm.rpc.read,
    diamante_count: orm.rpc.count,
    diamante_update: orm.rpc.update,
    diamante_create: orm.rpc.create,
    diamante_del: orm.rpc.del,
    diamante_increment: orm.rpc.increment,
  }
}

export const diamanteController = diamanteControllerFactory(
  oftalmoDb,
  diamanteSchema
)
