import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { tEtiqueta, TtEtiqueta } from '@/schemas/oftalmo/tEtiqueta.schema'
import { TSchema } from '@/schemas/schema.type'

class EtiquetaExternaController extends OrmTable<TtEtiqueta> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const etiquetaExternaController = new EtiquetaExternaController(
  dbOftalmo,
  tEtiqueta
)
