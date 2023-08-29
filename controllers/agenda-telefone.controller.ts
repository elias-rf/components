import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Tphonebook, phonebook } from '@/schemas/oftalmo/phonebook.schema'
import type { TSchema } from '@/schemas/schema.type'

class AgendaTelefoneController extends OrmTable<Tphonebook> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const agendaTelefoneController = new AgendaTelefoneController(
  dbOftalmo,
  phonebook
)
