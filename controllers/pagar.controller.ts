import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { ArqDup, TArqDup } from '@/schemas/plano/ArqDup.schema'
import { TSchema } from '@/schemas/schema.type'

class PagarController extends OrmTable<TArqDup> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const pagarController = new PagarController(dbPlano, ArqDup)
