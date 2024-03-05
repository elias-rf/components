import { planoDb } from '@/data/plano/plano.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/orm-table.js'

export const cidadeSchema = {
  table: 'cidadesERF',
  primary: ['CdCidadeIBGE'] as const,
  fields: ['CdUFIBGE', 'CdCidadeIBGE', 'NmCidadeIBGE', 'uf', 'ufOld'] as const,
}

export type TCidadeFields = (typeof cidadeSchema.fields)[number]
export type TCidadeKeys = (typeof cidadeSchema.primary)[number]

function cidadeControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TCidadeFields, TCidadeKeys>(db, schema)
  return {
    cidade_list: orm.rpc.list,
    cidade_read: orm.rpc.read,
    cidade_count: orm.rpc.count,
    cidade_update: orm.rpc.update,
    cidade_create: orm.rpc.create,
    cidade_del: orm.rpc.del,
    cidade_increment: orm.rpc.increment,
  }
}

export const cidadeController = cidadeControllerFactory(planoDb, cidadeSchema)
