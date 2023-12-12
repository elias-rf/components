import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const CategPro = {
  database: 'plano',
  table: 'CategPro',
  primary: ['CdCategoria'],
  fields: [
    'CdCategoria',

    'NmCategoria',

    'CdDepartamento',

    'FgListaPreco',

    'DtUltAlteracao',

    'Mensagem',

    'PercDescMaxGerente',

    'PercDescMaxVendedor',
  ],
}

export type TProdutoCategoriaFields = (typeof CategPro.fields)[number]
export type TProdutoCategoriaKeys = (typeof CategPro.primary)[number]

function produtoCategoriaControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TProdutoCategoriaFields, TProdutoCategoriaKeys>(
    db,
    schema
  )
  return {
    produtoCategoria_list: orm.rpc.list,
    produtoCategoria_read: orm.rpc.read,
    produtoCategoria_count: orm.rpc.count,
    produtoCategoria_update: orm.rpc.update,
    produtoCategoria_create: orm.rpc.create,
    produtoCategoria_del: orm.rpc.del,
    produtoCategoria_increment: orm.rpc.increment,
  }
}

export const produtoCategoriaController = produtoCategoriaControllerFactory(
  dbPlano,
  CategPro
)
