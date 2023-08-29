import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { CadPro, TCadPro } from '@/schemas/plano/CadPro.schema'
import type { TSchema } from '@/schemas/schema.type'

class ProdutoPlanoController extends OrmTable<TCadPro> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const produtoPlanoController = new ProdutoPlanoController(
  dbPlano,
  CadPro
)
