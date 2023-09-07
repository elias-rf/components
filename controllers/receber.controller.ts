import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { TitCobr } from '@/schemas/plano/TitCobr.schema'
import { TSchema } from '@/schemas/schema.type'

export type TReceberFields = keyof typeof TitCobr.fields
export type TReceberKeys = (typeof TitCobr.primary)[number]

function receberControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TReceberFields, TReceberKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const receberController = receberControllerFactory(dbPlano, TitCobr)
