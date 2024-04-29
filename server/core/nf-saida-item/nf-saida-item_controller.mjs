// import { planoDb } from '../../../data/plano/plano.db.mjs'
//
// import { TAdapterKnex } from '../../../utils/orm/adapter-knex.mjs'
// import { ormTable } from '../../../utils/orm/index.mjs'

// export type TNfSaidaItemFields = (typeof ItemNota.fields)[number]
// export type TNfSaidaItemKeys = (typeof ItemNota.primary)[number]

// function nfSaidaItemControllerFactory(db, schema) {
//   const orm = ormTable<TNfSaidaItemFields, TNfSaidaItemKeys>(db, schema)
//   return {
//     nfSaidaItem_list: orm.rpc.list,
//     nfSaidaItem_read: orm.rpc.read,
//     nfSaidaItem_count: orm.rpc.count,
//     nfSaidaItem_update: orm.rpc.update,
//     nfSaidaItem_create: orm.rpc.create,
//     nfSaidaItem_del: orm.rpc.del,
//     nfSaidaItem_increment: orm.rpc.increment,
//   }
// }

export const nfSaidaItemController = {}
