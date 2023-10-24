import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { Estoque } from '@/schemas/plano/Estoque.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TEstoqueFields = keyof typeof Estoque.fields
export type TEstoqueKeys = (typeof Estoque.primary)[number]

function estoqueControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TEstoqueFields, TEstoqueKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const estoqueController = estoqueControllerFactory(dbPlano, Estoque)
