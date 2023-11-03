import type { TSchema } from '@/schemas/schema.type'

export function getFields(schema: TSchema) {
  return schema.fields
}
