import { grupoMapFields } from './grupo.map-fields.js'
import { grupoSchema } from './grupo.schema.js'

export type TGrupoKeys = (typeof grupoSchema.primary)[number]
export type TGrupoFields = (typeof grupoSchema.fields)[number]

export type TGrupoDtoKeys = 'id'
export type TGrupoDtoFields = keyof typeof grupoMapFields
