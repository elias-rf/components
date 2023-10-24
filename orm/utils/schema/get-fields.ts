import { TSchema } from '@/schemas/schema.type'

export function getFields(schema: TSchema) {
  return Object.keys(schema.fields)
}
