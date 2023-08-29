import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { ItemNota, TItemNota } from '@/schemas/plano/ItemNota.schema'
import { TSchema } from '@/schemas/schema.type'

class NfSaidaItemController extends OrmTable<TItemNota> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const nfSaidaItemController = new NfSaidaItemController(
  dbPlano,
  ItemNota
)
