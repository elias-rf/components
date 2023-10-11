import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tMaquina } from '@/schemas/oftalmo/tMaquina.schema'
import { TSchema } from '@/schemas/schema.type'

export type TMaquinaFields = keyof typeof tMaquina.fields
export type TMaquinaKeys = (typeof tMaquina.primary)[number]

function maquinaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TMaquinaFields, TMaquinaKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const maquinaController = maquinaControllerFactory(dbOftalmo, tMaquina)
