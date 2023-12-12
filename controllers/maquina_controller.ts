import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function maquinaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TMaquinaFields, TMaquinaKeys>(db, schema)
  return {
    maquina_list: orm.rpc.list,
    maquina_read: orm.rpc.read,
    maquina_count: orm.rpc.count,
    maquina_update: orm.rpc.update,
    maquina_create: orm.rpc.create,
    maquina_del: orm.rpc.del,
    maquina_increment: orm.rpc.increment,
  }
}

export const maquinaController = maquinaControllerFactory(dbOftalmo, tMaquina)
