import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { TitCobr } from '@/schemas/plano/TitCobr.schema'
import { TSchema } from '@/schemas/schema.type'

export type TReceberFields = keyof typeof TitCobr.fields
export type TReceberKeys = (typeof TitCobr.primary)[number]

function receberControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TReceberFields, TReceberKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const receberController = receberControllerFactory(dbPlano, TitCobr)
