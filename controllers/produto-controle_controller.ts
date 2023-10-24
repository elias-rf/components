import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { Lotes } from '@/schemas/plano/Lotes.schema'
import { TSchema } from '@/schemas/schema.type'

export type TProdutoControleFields = keyof typeof Lotes.fields
export type TProdutoControleKeys = (typeof Lotes.primary)[number]

function produtoControleControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoControleFields, TProdutoControleKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const produtoControleController = produtoControleControllerFactory(
  dbPlano,
  Lotes
)
