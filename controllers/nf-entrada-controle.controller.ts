import { dbPlano } from '@/controllers/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { LotesNotaEntrada } from '@/schemas/plano/LotesNotaEntrada.schema'
import { TSchema } from '@/schemas/schema.type'

export type TNfEntradaControleFields = keyof typeof LotesNotaEntrada.fields
export type TNfEntradaControleKeys = (typeof LotesNotaEntrada.primary)[number]

function nfEntradaControleControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfEntradaControleFields, TNfEntradaControleKeys>(
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

export const nfEntradaControleController = nfEntradaControleControllerFactory(
  dbPlano,
  LotesNotaEntrada
)
