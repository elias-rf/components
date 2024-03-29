import { grupoSujeitoMapFields } from './grupo-sujeito.map-fields.js'
import { grupoSujeitoSchema } from './grupo-sujeito.schema.js'

export type TGrupoSujeitoKeys = (typeof grupoSujeitoSchema.primary)[number]
export type TGrupoSujeitoFields = (typeof grupoSujeitoSchema.fields)[number]

export type TGrupoSujeitoDtoKeys = 'grupoId' | 'sujeitoId'
export type TGrupoSujeitoDtoFields = keyof typeof grupoSujeitoMapFields
