import { oftalmoDb } from '../data/oftalmo/oftalmo.db.mjs'
import { ormTable } from '../utils/orm/index.mjs'

export const empregadoSchema = {
  table: 'tbl_Funcionario',
  primary: ['kFuncionario'],
  fields: [
    'kFuncionario',
    'FKEmpresa',
    'NomeFuncionario',
    'IDN',
    'Funcao',
    'Afastado',
    'Setor',
  ],
}

function empregadoControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    empregado_list: orm.rpc.list,
    empregado_read: orm.rpc.read,
    empregado_count: orm.rpc.count,
    empregado_update: orm.rpc.update,
    empregado_create: orm.rpc.create,
    empregado_del: orm.rpc.del,
    empregado_increment: orm.rpc.increment,
  }
}

export const empregadoController = empregadoControllerFactory(
  oftalmoDb,
  empregadoSchema
)
