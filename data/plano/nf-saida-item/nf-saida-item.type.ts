import { nfSaidaItemMapFields } from '@/data/plano/nf-saida-item/nf-saida-item.map-fields.js'
import { nfSaidaItemSchema } from '@/data/plano/nf-saida-item/nf-saida-item.schema.js'

export type TNfSaidaItemFields = (typeof nfSaidaItemSchema.fields)[number]
export type TNfSaidaItemKeys = (typeof nfSaidaItemSchema.primary)[number]

export type TNfSaidaItemDtoKeys = 'empresaId' | 'modelo' | 'numero' | 'serie'
export type TNfSaidaItemDtoFields = keyof typeof nfSaidaItemMapFields
