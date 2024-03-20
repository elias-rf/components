import { nfEntradaMapFields } from '@/data/plano/nf-entrada/nf-entrada.map-fields.js'
import { nfEntradaSchema } from '@/data/plano/nf-entrada/nf-entrada.schema.js'

export type TNfEntradaFields = (typeof nfEntradaSchema.fields)[number]
export type TNfEntradaKeys = (typeof nfEntradaSchema.primary)[number]

export type TNfEntradaDtoKeys = 'empresaId' | 'modelo' | 'numero' | 'serie'
export type TNfEntradaDtoFields = keyof typeof nfEntradaMapFields
