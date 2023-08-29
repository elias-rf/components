import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { Tvendedor, vendedor } from '@/schemas/oftalmo/vendedor.schema'
import type { TSchema } from '@/schemas/schema.type'

class VendedorMetaController extends OrmTable<Tvendedor> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const vendedorMetaController = new VendedorMetaController(
  dbOftalmo,
  vendedor
)
