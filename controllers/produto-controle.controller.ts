import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { Lotes } from '@/schemas/plano/Lotes.schema'
import { TSchema } from '@/schemas/schema.type'

export type TProdutoControleFields = keyof typeof Lotes.fields
export type TProdutoControleKeys = (typeof Lotes.primary)[number]

function produtoControleControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoControleFields, TProdutoControleKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const produtoControleController = produtoControleControllerFactory(
  dbPlano,
  Lotes
)
