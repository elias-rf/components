import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { CategPro, TCategPro } from '@/schemas/plano/CategPro.schema'
import { TSchema } from '@/schemas/schema.type'

class ProdutoCategoriaController extends OrmTable<TCategPro> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const produtoCategoriaController = new ProdutoCategoriaController(
  dbPlano,
  CategPro
)
