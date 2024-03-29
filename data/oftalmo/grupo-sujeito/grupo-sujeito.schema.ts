import { TSchema } from '@/schemas/schema.type.js'

export const grupoSujeitoSchema: TSchema = {
  table: 'groupSubject',
  primary: ['idGroup', 'idSubject'] as const,
  fields: ['idGroup', 'idSubject'] as const,
}
