import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

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

function diamanteControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TDiamanteFields, TDiamanteKeys>(db, schema)

  return { ...orm.rpc }
}

export const diamanteController = diamanteControllerFactory(
  dbOftalmo,
  diamanteSchema
)
