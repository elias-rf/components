import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Tdiamante, diamante } from '@/schemas/oftalmo/diamante.schema'
import type { TSchema } from '@/schemas/schema.type'

class DiamanteController extends OrmTable<Tdiamante> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const diamanteController = new DiamanteController(dbOftalmo, diamante)
