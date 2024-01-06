import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/orm-table.js'

export const agendaTelefoneSchema = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

export type TAgendaTelefoneFields = (typeof agendaTelefoneSchema.fields)[number]
export type TAgendaTelefoneKeys = (typeof agendaTelefoneSchema.primary)[number]

function agendaTelefoneControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TAgendaTelefoneFields, TAgendaTelefoneKeys>(db, schema)
  return {
    agendaTelefone_list: orm.rpc.list,
    agendaTelefone_read: orm.rpc.read,
    agendaTelefone_count: orm.rpc.count,
    agendaTelefone_update: orm.rpc.update,
    agendaTelefone_create: orm.rpc.create,
    agendaTelefone_del: orm.rpc.del,
    agendaTelefone_increment: orm.rpc.increment,
  }
}

export const agendaTelefoneController = agendaTelefoneControllerFactory(
  dbOftalmo,
  agendaTelefoneSchema
)
