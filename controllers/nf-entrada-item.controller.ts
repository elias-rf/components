import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { NFItem } from '@/schemas/plano/NFItem.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfEntradaItemFields = keyof typeof NFItem.fields
export type TNfEntradaItemKeys = (typeof NFItem.primary)[number]

function nfEntradaItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfEntradaItemFields, TNfEntradaItemKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const nfEntradaItemController = nfEntradaItemControllerFactory(
  dbPlano,
  NFItem
)
