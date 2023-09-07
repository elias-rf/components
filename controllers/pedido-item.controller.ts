import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { ItemPedido } from '@/schemas/plano/ItemPedido.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TPedidoItemFields = keyof typeof ItemPedido.fields
export type TPedidoItemKeys = (typeof ItemPedido.primary)[number]

function pedidoItemControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPedidoItemFields, TPedidoItemKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const pedidoItemController = pedidoItemControllerFactory(
  dbPlano,
  ItemPedido
)
