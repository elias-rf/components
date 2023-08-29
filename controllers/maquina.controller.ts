import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { TtMaquina, tMaquina } from '@/schemas/oftalmo/tMaquina.schema'
import { TSchema } from '@/schemas/schema.type'

class MaquinaController extends OrmTable<TtMaquina> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const maquinaController = new MaquinaController(dbOftalmo, tMaquina)
