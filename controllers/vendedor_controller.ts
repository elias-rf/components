import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CadVen } from '@/schemas/plano/CadVen.schema'
import type { TSchema } from '@/schemas/schema.type'

export type TVendedorFields = keyof typeof CadVen.fields
export type TVendedorKeys = (typeof CadVen.primary)[number]

function vendedorControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TVendedorFields, TVendedorKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const vendedorController = vendedorControllerFactory(dbPlano, CadVen)
