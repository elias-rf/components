import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tOperacaoDeProducao } from '@/schemas/oftalmo/tOperacaoDeProducao.schema'
import { TSchema } from '@/schemas/schema.type'

export type TOperacaoProducaoFields = keyof typeof tOperacaoDeProducao.fields
export type TOperacaoProducaoKeys = (typeof tOperacaoDeProducao.primary)[number]

function operacaoProducaoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TOperacaoProducaoFields, TOperacaoProducaoKeys>(
    db,
    schema
  )
  return {
    ...orm.rpc,
  }
}

export const operacaoProducaoController = operacaoProducaoControllerFactory(
  dbOftalmo,
  tOperacaoDeProducao
)
