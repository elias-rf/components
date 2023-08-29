import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  TtOperacaoDeProducao,
  tOperacaoDeProducao,
} from '@/schemas/oftalmo/tOperacaoDeProducao.schema'
import { TSchema } from '@/schemas/schema.type'

class OperacaoProducaoController extends OrmTable<TtOperacaoDeProducao> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const operacaoProducaoController = new OperacaoProducaoController(
  dbOftalmo,
  tOperacaoDeProducao
)
