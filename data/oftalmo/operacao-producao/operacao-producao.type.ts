import { operacaoProducaoMapFields } from '@/data/oftalmo/operacao-producao/operacao-producao.map-fields.js'
import { operacaoProducaoSchema } from '@/data/oftalmo/operacao-producao/operacao-producao.schema.js'

export type TOperacaoProducaoFields =
  (typeof operacaoProducaoSchema.fields)[number]
export type TOperacaoProducaoKeys =
  (typeof operacaoProducaoSchema.primary)[number]

export type TOperacaoProducaoDtoKeys = 'id'
export type TOperacaoProducaoDtoFields = keyof typeof operacaoProducaoMapFields
