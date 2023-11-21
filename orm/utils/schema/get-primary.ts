import type { TSchema } from '@/schemas/schema.type.js'

/**
 * Returns the primary ID fields from the given schema.
 *
 * @param {TSchema} schema - The schema to extract primary ID fields from.
 * @return {readonly string[]} The primary ID fields.
 */
export function getPrimary(schema: TSchema): readonly string[] {
  return schema.primary
}
