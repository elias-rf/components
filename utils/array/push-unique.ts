/**
 * Copies the input array and appends unique values from the given value or array of values.
 * @param {Array} arr - The original array.
 * @param {any|Array<any>} value - The value or array of values to append.
 * @returns {Array} - A new array with unique values appended.
 */
export function pushUnique(arr: any[], value: any | any[]) {
  const response = [...arr]
  if (Array.isArray(value)) {
    for (const valueItem of value) {
      if (!response.includes(valueItem)) response.push(valueItem)
    }
    return response
  }
  if (!arr.includes(value)) response.push(value)
  return response
}
