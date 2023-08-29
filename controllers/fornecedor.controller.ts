import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { CadFor, TCadFor } from '@/schemas/plano/CadFor.schema'
import { TSchema } from '@/schemas/schema.type'

class FornecedorController extends OrmTable<TCadFor> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const fornecedorController = new FornecedorController(dbPlano, CadFor)
