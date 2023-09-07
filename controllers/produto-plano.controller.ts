import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CadPro } from '@/schemas/plano/CadPro.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TProdutoPlanoFields = keyof typeof CadPro.fields
export type TProdutoPlanoKeys = (typeof CadPro.primary)[number]

function produtoPlanoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoPlanoFields, TProdutoPlanoKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
  }
}

export const produtoPlanoController = produtoPlanoControllerFactory(
  dbPlano,
  CadPro
)
