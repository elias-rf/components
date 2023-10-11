import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { ItemNota } from '@/schemas/plano/ItemNota.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfSaidaItemFields = keyof typeof ItemNota.fields
export type TNfSaidaItemKeys = (typeof ItemNota.primary)[number]

function nfSaidaItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaItemFields, TNfSaidaItemKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfSaidaItemController = nfSaidaItemControllerFactory(
  dbPlano,
  ItemNota
)
