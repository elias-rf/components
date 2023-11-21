import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

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

function operacaoProducaoControllerFactory(db: AdapterKnex, schema: TSchema) {
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
