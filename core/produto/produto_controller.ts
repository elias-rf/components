// import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
// import type { TSchema } from '@/schemas/schema.type.js'
// import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
// import { ormTable } from '@/utils/orm/index.js'

// export type TProdutoFields = (typeof tbl_Produto.fields)[number]
// export type TProdutoKeys = (typeof tbl_Produto.primary)[number]

// function produtoControllerFactory(db: TAdapterKnex, schema: TSchema) {
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
