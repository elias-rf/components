import { nfSaidaLoteUseCases } from '../../core/nf-saida-lote/use-cases/index.mjs'
import { dataSource } from '../../data/index.mjs'

const useCases = nfSaidaLoteUseCases(dataSource)

export const nfSaidaLoteController = {
  nfSaidaLote_list: useCases.list,
  nfSaidaLote_read: useCases.read,
  nfSaidaLote_count: useCases.count,
  nfSaidaLote_update: useCases.update,
  nfSaidaLote_create: useCases.create,
  nfSaidaLote_del: useCases.del,
}

// import { planoDb } from '../../../data/plano/plano.db.mjs'
//
// import { TAdapterKnex } from '../../../utils/orm/adapter-knex.mjs'
// import { ormTable } from '../../../utils/orm/index.mjs'

// export type TNfSaidaLoteFields = (typeof LotesNota.fields)[number]
// export type TNfSaidaLoteKeys = (typeof LotesNota.primary)[number]
// ;(LotesNota as TSchema).relations = {
//   nfSaidaItem: {
//     method: () =>
//       import('./nf-saida-item_controller.mjs').then(
//         (m) => m.nfSaidaItemController.nfSaidaItem_read
//       ),
//     where: [
//       ['CdFilial', 'CdFilial'],
//       ['NumNota', 'NumNota'],
//       ['Serie', 'Serie'],
//       ['Modelo', 'Modelo'],
//     ],
//   },
//   nfSaida: {
//     method: () =>
//       import('../nf-saida/nf-saida_controller.mjs').then(
//         (m) => m.nfSaidaController.nfSaida_read
//       ),
//     where: [
//       ['CdFilial', 'CdFilial'],
//       ['NumNota', 'NumNota'],
//       ['Serie', 'Serie'],
//       ['Modelo', 'Modelo'],
//     ],
//   },
//   produto: {
//     method: () =>
//       import('../produto/produto-plano/produto-plano_controller.mjs').then(
//         (m) => m.produtoPlanoController.produtoPlano_read
//       ),
//     where: [['CdProduto', 'CdProduto']],
//   },
// }

// function nfSaidaLoteControllerFactory(db, schema) {
//   const orm = ormTable<TNfSaidaLoteFields, TNfSaidaLoteKeys>(db, schema)
//   return {
//     nfSaidaLote_list: orm.rpc.list,
//     nfSaidaLote_read: orm.rpc.read,
//     nfSaidaLote_count: orm.rpc.count,
//     nfSaidaLote_update: orm.rpc.update,
//     nfSaidaLote_create: orm.rpc.create,
//     nfSaidaLote_del: orm.rpc.del,
//     nfSaidaLote_increment: orm.rpc.increment,
//   }
// }
