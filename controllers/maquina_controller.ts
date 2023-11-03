import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const tMaquina: TSchema = {
  table: 'tMaquina',
  primary: ['kMaquina'] as const,
  fields: [
    'kMaquina',

    'NomeMaquina',

    'Serie',

    'fkDivisao',

    'fkSetor',

    'Descricao',

    'FrequenciaManutencao',

    'Ativo',
  ],
}

export type TMaquinaFields = (typeof tMaquina.fields)[number]
export type TMaquinaKeys = (typeof tMaquina.primary)[number]

function maquinaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TMaquinaFields, TMaquinaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const maquinaController = maquinaControllerFactory(dbOftalmo, tMaquina)
