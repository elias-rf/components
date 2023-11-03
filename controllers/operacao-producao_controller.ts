import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const tOperacaoDeProducao = {
  database: 'oftalmo',
  table: 'tOperacaoDeProducao',
  primary: ['kOperacao'],
  fields: [
    'kOperacao',
    'Operacao',
    'EhRetrabalho',
    'Especial',
    'Descricao',
    'Amostragem',
  ],
}

export type TOperacaoProducaoFields =
  (typeof tOperacaoDeProducao.fields)[number]
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
