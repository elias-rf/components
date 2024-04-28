/**
 * Returns the primary ID fields from the given schema.
 *
 * @return {readonly string[]} The primary ID fields.
 */
export function getPrimary(schema) {
  return schema.primary;
}
