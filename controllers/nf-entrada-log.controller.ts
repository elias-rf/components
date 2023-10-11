import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { NfLogConferencia } from '@/schemas/plano/NfLogConferencia.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfEntradaLogFields = keyof typeof NfLogConferencia.fields
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
