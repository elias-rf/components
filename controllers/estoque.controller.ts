import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Estoque, TEstoque } from '@/schemas/plano/Estoque.schema'
import type { TSchema } from '@/schemas/schema.type'

class EstoqueController extends OrmTable<TEstoque> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const estoqueController = new EstoqueController(dbPlano, Estoque)
