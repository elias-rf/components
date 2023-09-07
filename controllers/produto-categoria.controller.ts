import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CategPro } from '@/schemas/plano/CategPro.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TProdutoCategoriaFields = keyof typeof CategPro.fields
export type TProdutoCategoriaKeys = (typeof CategPro.primary)[number]

function produtoCategoriaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoCategoriaFields, TProdutoCategoriaKeys>(
    db,
    schema
  )
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const produtoCategoriaController = produtoCategoriaControllerFactory(
  dbPlano,
  CategPro
)
