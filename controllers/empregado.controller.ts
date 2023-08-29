import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  Ttbl_Funcionario,
  tbl_Funcionario,
} from '@/schemas/oftalmo/tbl_Funcionario.schema'
import type { TSchema } from '@/schemas/schema.type'

class EmpregadoController extends OrmTable<Ttbl_Funcionario> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const empregadoController = new EmpregadoController(
  dbOftalmo,
  tbl_Funcionario
)
