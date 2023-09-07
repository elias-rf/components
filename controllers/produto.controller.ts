import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_Produto } from '@/schemas/oftalmo/tbl_Produto.schema'
import { TSchema } from '@/schemas/schema.type'

export type TProdutoFields = keyof typeof tbl_Produto.fields
export type TProdutoKeys = (typeof tbl_Produto.primary)[number]

function produtoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoFields, TProdutoKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm: orm,
  }
}

export const produtoController = produtoControllerFactory(
  dbOftalmo,
  tbl_Produto
)
