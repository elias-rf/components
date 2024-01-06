import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

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

function operacaoProducaoControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TOperacaoProducaoFields, TOperacaoProducaoKeys>(
    db,
    schema
  )
  return {
    operacaoProducao_list: orm.rpc.list,
    operacaoProducao_read: orm.rpc.read,
    operacaoProducao_count: orm.rpc.count,
    operacaoProducao_update: orm.rpc.update,
    operacaoProducao_create: orm.rpc.create,
    operacaoProducao_del: orm.rpc.del,
    operacaoProducao_increment: orm.rpc.increment,
  }
}

export const operacaoProducaoController = operacaoProducaoControllerFactory(
  dbOftalmo,
  tOperacaoDeProducao
)
