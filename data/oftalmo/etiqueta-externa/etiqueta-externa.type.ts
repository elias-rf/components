import { etiquetaExternaMapFields } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.map-fields.js'
import { etiquetaExternaSchema } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.schema.js'

export type TEtiquetaExternaKeys =
  (typeof etiquetaExternaSchema.primary)[number]
export type TEtiquetaExternaFields =
  (typeof etiquetaExternaSchema.fields)[number]

export type TEtiquetaExternaDtoKeys = 'id'
export type TEtiquetaExternaDtoFields = keyof typeof etiquetaExternaMapFields
