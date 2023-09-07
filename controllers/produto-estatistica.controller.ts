import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { EstatPro } from '@/schemas/plano/EstatPro.schema'
import { TSchema } from '@/schemas/schema.type'

export type TProdutoEstatisticaFields = keyof typeof EstatPro.fields
export type TProdutoEstatisticaKeys = (typeof EstatPro.primary)[number]

function produtoEstatisticaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoEstatisticaFields, TProdutoEstatisticaKeys>(
    db,
    schema
  )
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    increment: orm.increment,
    orm,
  }
}

export const produtoEstatisticaController = produtoEstatisticaControllerFactory(
  dbPlano,
  EstatPro
)
