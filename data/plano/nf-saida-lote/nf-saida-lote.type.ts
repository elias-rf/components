import { nfSaidaLoteMapFields } from '@/data/plano/nf-saida-lote/nf-saida-lote.map-fields.js'
import { nfSaidaLoteSchema } from '@/data/plano/nf-saida-lote/nf-saida-lote.schema.js'

export type TNfSaidaLoteFields = (typeof nfSaidaLoteSchema.fields)[number]
export type TNfSaidaLoteKeys = (typeof nfSaidaLoteSchema.primary)[number]

export type TNfSaidaLoteDtoKeys = 'empresaId' | 'modelo' | 'numero' | 'serie'
export type TNfSaidaLoteDtoFields = keyof typeof nfSaidaLoteMapFields
