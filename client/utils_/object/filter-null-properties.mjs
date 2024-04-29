/**
 * Filters out non-empty properties from the given object.
 *
 * @param {Record<string, any>} obj - The object to filter.
 * @return {Record<string, any>} The filtered object.
 */
export function filterNullProperties(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== null && value !== undefined
    )
  )
}
