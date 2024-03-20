import { agendaTelefoneMapFields } from '@/data/oftalmo/agenda-telefone/agenda-telefone.map-fields.js'
import { agendaTelefoneSchema } from '@/data/oftalmo/agenda-telefone/agenda-telefone.schema.js'

export type TAgendaTelefoneKeys = (typeof agendaTelefoneSchema.primary)[number]
export type TAgendaTelefoneFields = (typeof agendaTelefoneSchema.fields)[number]

export type TAgendaTelefoneDtoKeys = 'id'
export type TAgendaTelefoneDtoFields = keyof typeof agendaTelefoneMapFields
