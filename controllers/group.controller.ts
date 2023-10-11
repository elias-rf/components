import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import {
  Ttbl_Seguranca_Grupo,
  tbl_Seguranca_Grupo,
} from '@/schemas/oftalmo/tbl_Seguranca_Grupo.schema'
import { TSchema } from '@/schemas/schema.type'

export type TGroupFields = keyof typeof tbl_Seguranca_Grupo.fields
export type TGroupKeys = (typeof tbl_Seguranca_Grupo.primary)[number]

function groupControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TGroupFields, TGroupKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const groupController = groupControllerFactory(
  dbOftalmo,
  tbl_Seguranca_Grupo
)

export type TGroupController = Ttbl_Seguranca_Grupo
