import { isValid, parse } from 'date-fns'

const formats = [
  'MM-dd',
  'yy-MM-dd',
  'yyyy-MM-dd',
  'dd/MM/yy',
  'dd/MM/yyyy',
  'dd/MM',
]

/**
 * Returns the date format that matches the given date string.
 *
 * @param {string} date - The date string to match against the formats.
 * @return {string | null} The matching date format or null if no match is found.
 */
export function getDateFormat(date) {
  for (const format of formats) {
    const parsed = parse(date, format, new Date())
    if (isValid(parsed)) {
      return format
    }
  }
  return null
}
