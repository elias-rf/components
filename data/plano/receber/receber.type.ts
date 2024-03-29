import { receberMapFields } from '@/data/plano/receber/receber.map-fields.js'
import { receberSchema } from '@/data/plano/receber/receber.schema.js'

export type TReceberFields = (typeof receberSchema.fields)[number]
export type TReceberKeys = (typeof receberSchema.primary)[number]

export type TReceberDtoKeys = 'empresaId' | 'numero' | 'serie' | 'modelo'
export type TReceberDtoFields = keyof typeof receberMapFields
