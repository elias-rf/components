import { oftalmoDb } from '../data/oftalmo/oftalmo.db.mjs'
import { ormTable } from '../utils/orm/index.mjs'

export const vendedor = {
  database: 'oftalmo',
  table: 'vendedor',
  primary: ['id'],
  fields: ['id', 'uf', 'meta'],
}

function vendedorMetaControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    vendedorMeta_list: orm.rpc.list,
    vendedorMeta_read: orm.rpc.read,
    vendedorMeta_count: orm.rpc.count,
    vendedorMeta_update: orm.rpc.update,
    vendedorMeta_create: orm.rpc.create,
    vendedorMeta_del: orm.rpc.del,
    vendedorMeta_increment: orm.rpc.increment,
  }
}

export const vendedorMetaController = vendedorMetaControllerFactory(
  oftalmoDb,
  vendedor
)
