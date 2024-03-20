import { nfEntradaLogMapFields } from '@/data/plano/nf-entrada-log/nf-entrada-log.map-fields.js'
import { nfEntradaLogSchema } from '@/data/plano/nf-entrada-log/nf-entrada-log.schema.js'

export type TNfEntradaLogFields = (typeof nfEntradaLogSchema.fields)[number]
export type TNfEntradaLogKeys = (typeof nfEntradaLogSchema.primary)[number]

export type TNfEntradaLogDtoKeys = 'numero' | 'serie' | 'empresaId' | 'modelo'
export type TNfEntradaLogDtoFields = keyof typeof nfEntradaLogMapFields
