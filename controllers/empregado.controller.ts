import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_Funcionario } from '@/schemas/oftalmo/tbl_Funcionario.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TEmpregadoFields = keyof typeof tbl_Funcionario.fields
export type TEmpregadoKeys = (typeof tbl_Funcionario.primary)[number]

function empregadoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEmpregadoFields, TEmpregadoKeys>(db, schema)
  return { ...orm.rpc }
}

export const empregadoController = empregadoControllerFactory(
  dbOftalmo,
  tbl_Funcionario
)
