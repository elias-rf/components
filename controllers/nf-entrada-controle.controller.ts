import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  LotesNotaEntrada,
  TLotesNotaEntrada,
} from '@/schemas/plano/LotesNotaEntrada.schema'
import { TSchema } from '@/schemas/schema.type'

class NfEntradaControleController extends OrmTable<TLotesNotaEntrada> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const nfEntradaControleController = new NfEntradaControleController(
  dbPlano,
  LotesNotaEntrada
)
