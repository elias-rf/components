import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { NatOpe } from '@/schemas/plano/NatOpe.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfCfopFields = keyof typeof NatOpe.fields
export type TNfCfopKeys = (typeof NatOpe.primary)[number]

function nfCfopControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfCfopFields, TNfCfopKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const nfCfopController = nfCfopControllerFactory(dbPlano, NatOpe)
