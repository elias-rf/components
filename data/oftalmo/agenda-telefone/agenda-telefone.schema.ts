import { TSchema } from '@/schemas/schema.type.js'
import { agendaTelefoneMapFields } from './agenda-telefone.map-fields.js'

export const agendaTelefoneSchema: TSchema = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}
