/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param {number} number - The number to be rounded.
 * @param {number} [decimalPlaces=2] - The number of decimal places to round to. Defaults to 2.
 * @return {number} The rounded number.
 */
export function round(number, decimalPlaces = 2) {
  return Number(
    Math.round(Number(number.toString() + 'e' + decimalPlaces.toString())) +
      'e-' +
      decimalPlaces.toString()
  )
}
