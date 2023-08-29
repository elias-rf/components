import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Lotes, TLotes } from '@/schemas/plano/Lotes.schema'
import { TSchema } from '@/schemas/schema.type'

class ProdutoControleController extends OrmTable<TLotes> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const produtoControleController = new ProdutoControleController(
  dbPlano,
  Lotes
)
