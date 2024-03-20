import { usuarioMapFields } from '@/data/oftalmo/usuario/usuario.map-fields.js'
import { usuarioSchema } from '@/data/oftalmo/usuario/usuario.schema.js'

export type TUsuarioKeys = (typeof usuarioSchema.primary)[number]
export type TUsuarioFields = (typeof usuarioSchema.fields)[number]

export type TUsuarioDtoKeys = 'id'
export type TUsuarioDtoFields = keyof typeof usuarioMapFields
