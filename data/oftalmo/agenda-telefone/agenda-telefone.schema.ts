import { TSchema } from '@/schemas/schema.type.js'

export const agendaTelefoneSchema: TSchema = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}
