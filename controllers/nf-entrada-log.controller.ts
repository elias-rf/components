import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  NfLogConferencia,
  TNfLogConferencia,
} from '@/schemas/plano/NfLogConferencia.schema'
import { TSchema } from '@/schemas/schema.type'

class NfEntradaLogController extends OrmTable<TNfLogConferencia> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const nfEntradaLogController = new NfEntradaLogController(
  dbPlano,
  NfLogConferencia
)
