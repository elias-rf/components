import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { cidadesERF, TcidadesERF } from '@/schemas/plano/cidadesERF.schema'
import type { TSchema } from '@/schemas/schema.type'

class CidadeController extends OrmTable<TcidadesERF> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const cidadeController = new CidadeController(dbPlano, cidadesERF)
