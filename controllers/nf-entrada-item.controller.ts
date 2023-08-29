import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { NFItem, TNFItem } from '@/schemas/plano/NFItem.schema'
import { TSchema } from '@/schemas/schema.type'

class NfEntradaItemController extends OrmTable<TNFItem> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const nfEntradaItemController = new NfEntradaItemController(
  dbPlano,
  NFItem
)
