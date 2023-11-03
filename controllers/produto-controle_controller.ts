import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'

export const Lotes: TSchema = {
  table: 'Lotes',
  primary: ['CdProduto', 'CdLote'] as const,
  fields: [
    'CdLote',

    'CdProduto',

    'CdFornecedor',

    'CdNRA',

    'DtFabricacao',

    'DtValidade',

    'DtAnalise',

    'Aspecto',

    'FatorCorrecao',

    'Densidade',

    'PercentualDiluicao',

    'SituacaoLote',

    'SerieNfEntrada',

    'QtdeAdquirida',

    'NumNfEntrada',

    'SaldoPeso',

    'DtEntrada',

    'DtLimiteUso',

    'TipoLote',

    'IdReduzido',

    'CdFilial',

    'Modelo',

    'NumLote',
  ] as const,
}

export type TProdutoControleFields = (typeof Lotes.fields)[number]
export type TProdutoControleKeys = (typeof Lotes.primary)[number]

function produtoControleControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TProdutoControleFields, TProdutoControleKeys>(db, schema)
  return {
    ...orm.rpc,
  }
}

export const produtoControleController = produtoControleControllerFactory(
  dbPlano,
  Lotes
)
