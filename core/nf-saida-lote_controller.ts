import { dbPlano } from '@/core/db/db-plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const LotesNota: TSchema = {
  table: 'LotesNota',
  primary: ['CdFilial', 'Serie', 'Modelo', 'NumNota', 'Sequencia'] as const,
  fields: [
    'CdFilial',
    'NumNota',
    'Serie',
    'Sequencia',
    'DtEmissao',
    'CdProduto',
    'NumLote',
    'Quantidade',
    'Modelo',
    'Cdlote',
  ],
}

export type TNfSaidaLoteFields = (typeof LotesNota.fields)[number]
export type TNfSaidaLoteKeys = (typeof LotesNota.primary)[number]
;(LotesNota as TSchema).relations = {
  nfSaidaItem: {
    method: () =>
      import('./nf-saida-item_controller.js').then(
        (m) => m.nfSaidaItemController.nfSaidaItem_read
      ),
    where: [
      ['CdFilial', 'CdFilial'],
      ['NumNota', 'NumNota'],
      ['Serie', 'Serie'],
      ['Modelo', 'Modelo'],
    ],
  },
  nfSaida: {
    method: () =>
      import('./nf-saida_controller.js').then(
        (m) => m.nfSaidaController.nfSaida_read
      ),
    where: [
      ['CdFilial', 'CdFilial'],
      ['NumNota', 'NumNota'],
      ['Serie', 'Serie'],
      ['Modelo', 'Modelo'],
    ],
  },
  produto: {
    method: () =>
      import('./produto-plano_controller.js').then(
        (m) => m.produtoPlanoController.produtoPlano_read
      ),
    where: [['CdProduto', 'CdProduto']],
  },
}

function nfSaidaLoteControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfSaidaLoteFields, TNfSaidaLoteKeys>(db, schema)
  return {
    nfSaidaLote_list: orm.rpc.list,
    nfSaidaLote_read: orm.rpc.read,
    nfSaidaLote_count: orm.rpc.count,
    nfSaidaLote_update: orm.rpc.update,
    nfSaidaLote_create: orm.rpc.create,
    nfSaidaLote_del: orm.rpc.del,
    nfSaidaLote_increment: orm.rpc.increment,
  }
}

export const nfSaidaLoteController = nfSaidaLoteControllerFactory(
  dbPlano,
  LotesNota
)
