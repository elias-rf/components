import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { NatOpe, TNatOpe } from '@/schemas/plano/NatOpe.schema'
import { TSchema } from '@/schemas/schema.type'

class NfCfopController extends OrmTable<TNatOpe> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const nfCfopController = new NfCfopController(dbPlano, NatOpe)
