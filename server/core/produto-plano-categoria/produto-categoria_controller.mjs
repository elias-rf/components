import { planoDb } from '../../data/plano/plano.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const CategPro = {
  database: 'plano',
  table: 'CategPro',
  primary: ['CdCategoria'],
  fields: [
    'CdCategoria',
    'NmCategoria',
    'CdDepartamento',
    'FgListaPreco',
    'DtUltAlteracao',
    'Mensagem',
    'PercDescMaxGerente',
    'PercDescMaxVendedor',
  ],
}

function produtoCategoriaControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    produtoCategoria_list: orm.rpc.list,
    produtoCategoria_read: orm.rpc.read,
    produtoCategoria_count: orm.rpc.count,
    produtoCategoria_update: orm.rpc.update,
    produtoCategoria_create: orm.rpc.create,
    produtoCategoria_del: orm.rpc.del,
    produtoCategoria_increment: orm.rpc.increment,
  }
}

export const produtoCategoriaController = produtoCategoriaControllerFactory(
  planoDb,
  CategPro
)
