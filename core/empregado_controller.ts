import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

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

function empregadoControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TEmpregadoFields, TEmpregadoKeys>(db, schema)
  return {
    empregado_list: orm.rpc.list,
    empregado_read: orm.rpc.read,
    empregado_count: orm.rpc.count,
    empregado_update: orm.rpc.update,
    empregado_create: orm.rpc.create,
    empregado_del: orm.rpc.del,
    empregado_increment: orm.rpc.increment,
  }
}

export const empregadoController = empregadoControllerFactory(
  oftalmoDb,
  empregadoSchema
)
