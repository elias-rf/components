import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { cidadesERF } from '@/schemas/plano/cidadesERF.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TCidadeFields = keyof typeof cidadesERF.fields
export type TCidadeKeys = (typeof cidadesERF.primary)[number]

function cidadeControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TCidadeFields, TCidadeKeys>(db, schema)
  return { ...orm.rpc }
}

export const cidadeController = cidadeControllerFactory(dbPlano, cidadesERF)
