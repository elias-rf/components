import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const diamanteSchema: TSchema = {
  table: 'diamante',
  primary: ['id'] as const,
  fields: [
    'id',
    'diamante',
    'tipo',
    'raio',
    'espessura',
    'fkMaquina',
    'fkFuncionario',
    'dataEntrada',
    'ordemInicial',
    'dataSaida',
    'ordemFinal',
    'qtdCortes',
  ],
}

export type TDiamanteFields = (typeof diamanteSchema.fields)[number]
export type TDiamanteKeys = (typeof diamanteSchema.primary)[number]

function diamanteControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TDiamanteFields, TDiamanteKeys>(db, schema)

  return {
    diamante_list: orm.rpc.list,
    diamante_read: orm.rpc.read,
    diamante_count: orm.rpc.count,
    diamante_update: orm.rpc.update,
    diamante_create: orm.rpc.create,
    diamante_del: orm.rpc.del,
    diamante_increment: orm.rpc.increment,
  }
}

export const diamanteController = diamanteControllerFactory(
  dbOftalmo,
  diamanteSchema
)
