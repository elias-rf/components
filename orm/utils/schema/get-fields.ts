import type { TSchema } from '@/schemas/schema.type.js'

export function getFields(schema: TSchema) {
  return schema.fields
}
