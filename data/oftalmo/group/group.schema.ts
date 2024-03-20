import { TSchema } from '@/schemas/schema.type.js'

export const groupSchema: TSchema = {
  table: 'tbl_Seguranca_Grupo',
  primary: ['kGrupo'] as const,
  fields: ['kGrupo', 'NomeGrupo'] as const,
}
