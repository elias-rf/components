import { esterilizacaoInternaMapFields } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.map-fields.js'
import { esterilizacaoInternaSchema } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.schema.js'

export type TEsterilizacaoInternaKeys =
  (typeof esterilizacaoInternaSchema.primary)[number]
export type TEsterilizacaoInternaFields =
  (typeof esterilizacaoInternaSchema.fields)[number]

export type TEsterilizacaoInternaDtoKeys = 'id'
export type TEsterilizacaoInternaDtoFields =
  keyof typeof esterilizacaoInternaMapFields
