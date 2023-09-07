import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TAgendaTelefoneFields = keyof typeof phonebook.fields
export type TAgendaTelefoneKeys = (typeof phonebook.primary)[number]

function agendaTelefoneControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TAgendaTelefoneFields, TAgendaTelefoneKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const agendaTelefoneController = agendaTelefoneControllerFactory(
  dbOftalmo,
  phonebook
)
