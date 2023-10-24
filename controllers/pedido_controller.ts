import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { MestrePedido } from '@/schemas/plano/MestrePedido.schema'
import { TSchema } from '@/schemas/schema.type'

export type TPedidoFields = keyof typeof MestrePedido.fields
export type TPedidoKeys = (typeof MestrePedido.primary)[number]

function pedidoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TPedidoFields, TPedidoKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const pedidoController = pedidoControllerFactory(dbPlano, MestrePedido)
