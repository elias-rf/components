import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { NfLogConferencia } from '@/schemas/plano/NfLogConferencia.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfEntradaLogFields = keyof typeof NfLogConferencia.fields
export type TNfEntradaLogKeys = (typeof NfLogConferencia.primary)[number]

function nfEntradaLogControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfEntradaLogFields, TNfEntradaLogKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const nfEntradaLogController = nfEntradaLogControllerFactory(
  dbPlano,
  NfLogConferencia
)
