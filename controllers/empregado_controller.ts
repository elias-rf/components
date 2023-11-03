import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const empregadoSchema: TSchema = {
  table: 'tbl_Funcionario',
  primary: ['kFuncionario'] as const,
  fields: [
    'kFuncionario',
    'FKEmpresa',
    'NomeFuncionario',
    'IDN',
    'Funcao',
    'Afastado',
    'Setor',
  ] as const,
}

export type TEmpregadoFields = (typeof empregadoSchema.fields)[number]
export type TEmpregadoKeys = (typeof empregadoSchema.primary)[number]

function empregadoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEmpregadoFields, TEmpregadoKeys>(db, schema)
  return { ...orm.rpc }
}

export const empregadoController = empregadoControllerFactory(
  dbOftalmo,
  empregadoSchema
)
