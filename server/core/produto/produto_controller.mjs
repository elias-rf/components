// import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
//
// import { TAdapterKnex } from '../../../utils/orm/adapter-knex.mjs'
// import { ormTable } from '../../../utils/orm/index.mjs'

// export type TProdutoFields = (typeof tbl_Produto.fields)[number]
// export type TProdutoKeys = (typeof tbl_Produto.primary)[number]

// function produtoControllerFactory(db, schema) {
//   const orm = ormTable<TProdutoFields, TProdutoKeys>(db, schema)
//   return {
//     produto_list: orm.rpc.list,
//     produto_read: orm.rpc.read,
//     produto_count: orm.rpc.count,
//     produto_update: orm.rpc.update,
//     produto_create: orm.rpc.create,
//     produto_del: orm.rpc.del,
//     produto_increment: orm.rpc.increment,
//   }
// }

export const produtoController = {}
