import { ordemProducaoOperacaoMapFields } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.map-fields.js'
import { ordemProducaoOperacaoSchema } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.schema.js'

export type TOrdemProducaoOperacaoFields =
  (typeof ordemProducaoOperacaoSchema.fields)[number]
export type TOrdemProducaoOperacaoKeys =
  (typeof ordemProducaoOperacaoSchema.primary)[number]

export type TOrdemProducaoOperacaoDtoKeys = 'id'
export type TOrdemProducaoOperacaoDtoFields =
  keyof typeof ordemProducaoOperacaoMapFields
