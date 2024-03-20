import { nfEntradaItemMapFields } from './nf-entrada-item.map-fields.js'
import { nfEntradaItemSchema } from './nf-entrada-item.schema.js'

export type TNfEntradaItemFields = (typeof nfEntradaItemSchema.fields)[number]
export type TNfEntradaItemKeys = (typeof nfEntradaItemSchema.primary)[number]

export type TNfEntradaItemDtoKeys = 'numero' | 'serie' | 'empresaId' | 'modelo'
export type TNfEntradaItemDtoFields = keyof typeof nfEntradaItemMapFields
