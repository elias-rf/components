import { nfSaidaMapFields } from '@/data/plano/nf-saida/nf-saida.map-fields.js'
import { nfSaidaSchema } from '@/data/plano/nf-saida/nf-saida.schema.js'

export type TNfSaidaFields = (typeof nfSaidaSchema.fields)[number]
export type TNfSaidaKeys = (typeof nfSaidaSchema.primary)[number]

export type TNfSaidaDtoKeys = 'empresaId' | 'modelo' | 'numero' | 'serie'
export type TNfSaidaDtoFields = keyof typeof nfSaidaMapFields
