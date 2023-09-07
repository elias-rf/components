import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import {
  Ttbl_Sistema_Grupo,
  tbl_Sistema_Grupo,
} from '@/schemas/oftalmo/tbl_Sistema_Grupo.schema'
import { TSchema } from '@/schemas/schema.type'

export type TGroupFields = keyof typeof tbl_Sistema_Grupo.fields
export type TGroupKeys = (typeof tbl_Sistema_Grupo.primary)[number]

function groupControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TGroupFields, TGroupKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const groupController = groupControllerFactory(
  dbOftalmo,
  tbl_Sistema_Grupo
)

export type TGroupController = Ttbl_Sistema_Grupo
