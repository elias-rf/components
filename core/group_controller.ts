import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const groupSchema = {
  table: 'tbl_Seguranca_Grupo',
  primary: ['kGrupo'] as const,
  fields: ['kGrupo', 'NomeGrupo'] as const,
}

export type TGroupFields = (typeof groupSchema.fields)[number]
export type TGroupKeys = (typeof groupSchema.primary)[number]

function groupControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TGroupFields, TGroupKeys>(db, schema)
  return {
    group_list: orm.rpc.list,
    group_read: orm.rpc.read,
    group_count: orm.rpc.count,
    group_update: orm.rpc.update,
    group_create: orm.rpc.create,
    group_del: orm.rpc.del,
    group_increment: orm.rpc.increment,
  }
}

export const groupController = groupControllerFactory(oftalmoDb, groupSchema)
