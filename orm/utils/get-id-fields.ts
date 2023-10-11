import { TSchema } from '@/schemas/schema.type'

export function getIdFields(schema: TSchema) {
  return schema.primary
}
