import type { TSchema } from '@/schemas/schema.type'

export function getTable(schema: TSchema) {
  return schema.table
}
