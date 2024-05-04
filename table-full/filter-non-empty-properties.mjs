/**
 * Filters out non-empty properties from the given object.
 *
 * @param {Record<string, any>} obj3 - The object to filter.
 * @return {Record<string, any>} The filtered object.
 */
export function filterNonEmptyProperties(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== '')
  )
}
