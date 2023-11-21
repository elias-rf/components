import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const NfLogConferencia: TSchema = {
  table: 'NfLogConferencia',
  primary: ['NumNota', 'Serie', 'Modelo'] as const,
  fields: [
    'CdFilial',

    'NumNota',

    'Serie',

    'CdFornecedor',

    'Data',

    'Usuario',

    'Operacao',

    'Modelo',
  ],
}

export type TNfEntradaLogFields = (typeof NfLogConferencia.fields)[number]
export type TNfEntradaLogKeys = (typeof NfLogConferencia.primary)[number]

function nfEntradaLogControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TNfEntradaLogFields, TNfEntradaLogKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfEntradaLogController = nfEntradaLogControllerFactory(
  dbPlano,
  NfLogConferencia
)
