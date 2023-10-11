import { TSchema } from '@/schemas/schema.type'

export function getTableName(schema: TSchema) {
  return schema.table
}
