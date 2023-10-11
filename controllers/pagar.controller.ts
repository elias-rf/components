import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { ArqDup } from '@/schemas/plano/ArqDup.schema'
import { TSchema } from '@/schemas/schema.type'

export type TPagarFields = keyof typeof ArqDup.fields
export type TPagarKeys = (typeof ArqDup.primary)[number]

function pagarControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPagarFields, TPagarKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pagarController = pagarControllerFactory(dbPlano, ArqDup)
