import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const agendaTelefoneSchema = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

export type TAgendaTelefoneFields = (typeof agendaTelefoneSchema.fields)[number]
export type TAgendaTelefoneKeys = (typeof agendaTelefoneSchema.primary)[number]

function agendaTelefoneControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TAgendaTelefoneFields, TAgendaTelefoneKeys>(db, schema)
  return { ...orm.rpc }
}

export const agendaTelefoneController = agendaTelefoneControllerFactory(
  dbOftalmo,
  agendaTelefoneSchema
)
