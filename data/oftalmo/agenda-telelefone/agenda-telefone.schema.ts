import { TSchema } from '@/schemas/schema.type.js'

export const agendaTelefoneSchema: TSchema = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

export type TAgendaTelefoneKeys = (typeof agendaTelefoneSchema.primary)[number]
export type TAgendaTelefoneFields = (typeof agendaTelefoneSchema.fields)[number]
