import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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
      import('./nf-saida-item_controller').then(
        (m) => m.nfSaidaItemController.read
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
      import('./nf-saida_controller').then((m) => m.nfSaidaController.read),
    where: [
      ['CdFilial', 'CdFilial'],
      ['NumNota', 'NumNota'],
      ['Serie', 'Serie'],
      ['Modelo', 'Modelo'],
    ],
  },
  produto: {
    method: () =>
      import('./produto-plano_controller').then(
        (m) => m.produtoPlanoController.read
      ),
    where: [['CdProduto', 'CdProduto']],
  },
}

function nfSaidaLoteControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaLoteFields, TNfSaidaLoteKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfSaidaLoteController = nfSaidaLoteControllerFactory(
  dbPlano,
  LotesNota
)