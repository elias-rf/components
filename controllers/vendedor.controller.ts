import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { CadVen, TCadVen } from '@/schemas/plano/CadVen.schema'
import type { TSchema } from '@/schemas/schema.type'

class VendedorController extends OrmTable<TCadVen> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const vendedorController = new VendedorController(dbPlano, CadVen)
