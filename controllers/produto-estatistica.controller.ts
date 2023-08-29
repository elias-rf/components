import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { EstatPro, TEstatPro } from '@/schemas/plano/EstatPro.schema'
import { TSchema } from '@/schemas/schema.type'

class ProdutoEstatisticaController extends OrmTable<TEstatPro> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const produtoEstatisticaController = new ProdutoEstatisticaController(
  dbPlano,
  EstatPro
)
