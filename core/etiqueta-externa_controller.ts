import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

export const etiquetaExternaSchema: TSchema = {
  table: 'tEtiqueta',
  primary: ['controle'] as const,
  fields: ['controle', 'qtdImpressao', 'dataFabricacao'],
}

export type TEtiquetaExternaFields =
  (typeof etiquetaExternaSchema.fields)[number]
export type TEtiquetaExternaKeys =
  (typeof etiquetaExternaSchema.primary)[number]

function etiquetaExternaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TEtiquetaExternaFields, TEtiquetaExternaKeys>(db, schema)
  return {
    etiquetaExterna_list: orm.rpc.list,
    etiquetaExterna_read: orm.rpc.read,
    etiquetaExterna_count: orm.rpc.count,
    etiquetaExterna_update: orm.rpc.update,
    etiquetaExterna_create: orm.rpc.create,
    etiquetaExterna_del: orm.rpc.del,
    etiquetaExterna_increment: orm.rpc.increment,
  }
}

export const etiquetaExternaController = etiquetaExternaControllerFactory(
  oftalmoDb,
  etiquetaExternaSchema
)
