import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  Ttbl_Sistema_Grupo,
  tbl_Sistema_Grupo,
} from '@/schemas/oftalmo/tbl_Sistema_Grupo.schema'
import { TSchema } from '@/schemas/schema.type'

class GroupModelController extends OrmTable<Ttbl_Sistema_Grupo> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }
}

export const groupModelController = new GroupModelController(
  dbOftalmo,
  tbl_Sistema_Grupo
)
