import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Ttbl_Produto, tbl_Produto } from '@/schemas/oftalmo/tbl_Produto.schema'
import { TSchema } from '@/schemas/schema.type'

class ProdutoController extends OrmTable<Ttbl_Produto> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const produtoController = new ProdutoController(dbOftalmo, tbl_Produto)
