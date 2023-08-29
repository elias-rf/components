import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  Ttbl_producao_etiqueta,
  tbl_producao_etiqueta,
} from '@/schemas/oftalmo/tbl_producao_etiqueta.schema'
import { TSchema } from '@/schemas/schema.type'

class EtiquetaInternaController extends OrmTable<Ttbl_producao_etiqueta> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const etiquetaInternaController = new EtiquetaInternaController(
  dbOftalmo,
  tbl_producao_etiqueta
)
