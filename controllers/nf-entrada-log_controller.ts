import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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

function nfEntradaLogControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfEntradaLogFields, TNfEntradaLogKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfEntradaLogController = nfEntradaLogControllerFactory(
  dbPlano,
  NfLogConferencia
)
