import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const cidadeSchema = {
  table: 'cidadesERF',
  primary: ['CdCidadeIBGE'] as const,
  fields: ['CdUFIBGE', 'CdCidadeIBGE', 'NmCidadeIBGE', 'uf', 'ufOld'] as const,
}

export type TCidadeFields = (typeof cidadeSchema.fields)[number]
export type TCidadeKeys = (typeof cidadeSchema.primary)[number]

function cidadeControllerFactory(db: AdapterKnex, schema: TSchema) {
  const orm = ormTable<TCidadeFields, TCidadeKeys>(db, schema)
  return { ...orm.rpc }
}

export const cidadeController = cidadeControllerFactory(dbPlano, cidadeSchema)
