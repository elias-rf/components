import type { TSchema } from '@/schemas/schema.type.js'

export function getTable(schema: TSchema) {
  return schema.table
}
