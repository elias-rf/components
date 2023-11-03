import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'

import type { TSchema } from '@/schemas/schema.type'

export const groupSchema: TSchema = {
  table: 'tbl_Seguranca_Grupo',
  primary: ['kGrupo'],
  fields: ['kGrupo', 'NomeGrupo'] as const,
}

export type TGroupFields = (typeof groupSchema.fields)[number]
export type TGroupKeys = (typeof groupSchema.primary)[number]

function groupControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TGroupFields, TGroupKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const groupController = groupControllerFactory(dbOftalmo, groupSchema)
