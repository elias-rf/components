import { nfEntradaControleMapFields } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.map-fields.js'
import { nfEntradaControleSchema } from '@/data/plano/nf-entrada-controle/nf-entrada-controle.schema.js'

export type TNfEntradaControleFields =
  (typeof nfEntradaControleSchema.fields)[number]
export type TNfEntradaControleKeys =
  (typeof nfEntradaControleSchema.primary)[number]

export type TNfEntradaControleDtoKeys =
  | 'empresaId'
  | 'numero'
  | 'serie'
  | 'modelo'
export type TNfEntradaControleDtoFields =
  keyof typeof nfEntradaControleMapFields
