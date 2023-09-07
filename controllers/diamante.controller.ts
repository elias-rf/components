import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { diamante } from '@/schemas/oftalmo/diamante.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TDiamanteFields = keyof typeof diamante.fields
export type TDiamanteKeys = (typeof diamante.primary)[number]

function diamanteControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TDiamanteFields, TDiamanteKeys>(db, schema)

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const diamanteController = diamanteControllerFactory(dbOftalmo, diamante)
