import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const etiquetaInternaSchema: TSchema = {
  table: 'tbl_producao_etiqueta',
  primary: ['NumControle'] as const,
  fields: ['NumControle', 'fkProdutoItem', 'DataInsercao'],
}

export type TEtiquetaInternaFields =
  (typeof etiquetaInternaSchema.fields)[number]
export type TEtiquetaInternaKeys =
  (typeof etiquetaInternaSchema.primary)[number]

function etiquetaInternaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TEtiquetaInternaFields, TEtiquetaInternaKeys>(db, schema)
  return {
    etiquetaInterna_list: orm.rpc.list,
    etiquetaInterna_read: orm.rpc.read,
    etiquetaInterna_count: orm.rpc.count,
    etiquetaInterna_update: orm.rpc.update,
    etiquetaInterna_create: orm.rpc.create,
    etiquetaInterna_del: orm.rpc.del,
    etiquetaInterna_increment: orm.rpc.increment,
  }
}

export const etiquetaInternaController = etiquetaInternaControllerFactory(
  dbOftalmo,
  etiquetaInternaSchema
)
