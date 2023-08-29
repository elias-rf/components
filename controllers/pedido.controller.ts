import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  MestrePedido,
  TMestrePedido,
} from '@/schemas/plano/MestrePedido.schema'
import { TSchema } from '@/schemas/schema.type'

class PedidoController extends OrmTable<TMestrePedido> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const pedidoController = new PedidoController(dbPlano, MestrePedido)
