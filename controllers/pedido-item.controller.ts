import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import { ItemPedido, TItemPedido } from '@/schemas/plano/ItemPedido.schema'
import type { TSchema } from '@/schemas/schema.type'

class PedidoItemController extends OrmTable<TItemPedido> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const pedidoItemController = new PedidoItemController(
  dbPlano,
  ItemPedido
)
