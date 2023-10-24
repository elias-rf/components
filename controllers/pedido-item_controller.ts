import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { ItemPedido } from '@/schemas/plano/ItemPedido.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TPedidoItemFields = keyof typeof ItemPedido.fields
export type TPedidoItemKeys = (typeof ItemPedido.primary)[number]

function pedidoItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPedidoItemFields, TPedidoItemKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pedidoItemController = pedidoItemControllerFactory(
  dbPlano,
  ItemPedido
)
