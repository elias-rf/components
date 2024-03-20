import { etiquetaInternaMapFields } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.map-fields.js'
import { etiquetaInternaSchema } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.schema.js'

export type TEtiquetaInternaKeys =
  (typeof etiquetaInternaSchema.primary)[number]
export type TEtiquetaInternaFields =
  (typeof etiquetaInternaSchema.fields)[number]

export type TEtiquetaInternaDtoKeys = 'id'
export type TEtiquetaInternaDtoFields = keyof typeof etiquetaInternaMapFields
