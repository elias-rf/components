import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CadFor } from '@/schemas/plano/CadFor.schema'
import { TSchema } from '@/schemas/schema.type'

export type TFornecedorFields = keyof typeof CadFor.fields
export type TFornecedorKeys = (typeof CadFor.primary)[number]

function fornecedorControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TFornecedorFields, TFornecedorKeys>(db, schema)
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm: orm,
  }
}

export const fornecedorController = fornecedorControllerFactory(dbPlano, CadFor)
