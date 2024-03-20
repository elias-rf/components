import { esterilizacaoExternaMapFields } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.map-fields.js'
import { esterilizacaoExternaSchema } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.schema.js'

export type TEsterilizacaoExternaKeys =
  (typeof esterilizacaoExternaSchema.primary)[number]
export type TEsterilizacaoExternaFields =
  (typeof esterilizacaoExternaSchema.fields)[number]

export type TEsterilizacaoExternaDtoKeys = 'id'
export type TEsterilizacaoExternaDtoFields =
  keyof typeof esterilizacaoExternaMapFields
