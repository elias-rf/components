import { ordemProducaoMapFields } from '@/data/oftalmo/ordem-producao/ordem-producao.map-fields.js'
import { ordemProducaoSchema } from '@/data/oftalmo/ordem-producao/ordem-producao.schema.js'

export type TOrdemProducaoFields = (typeof ordemProducaoSchema.fields)[number]
export type TOrdemProducaoKeys = (typeof ordemProducaoSchema.primary)[number]

export type TOrdemProducaoDtoKeys = 'id'
export type TOrdemProducaoDtoFields = keyof typeof ordemProducaoMapFields
