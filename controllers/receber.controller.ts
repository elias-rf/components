import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { TTitCobr, TitCobr } from '@/schemas/plano/TitCobr.schema'
import { TSchema } from '@/schemas/schema.type'

class ReceberController extends OrmTable<TTitCobr> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const receberController = new ReceberController(dbPlano, TitCobr)
