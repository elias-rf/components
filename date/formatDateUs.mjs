import { format } from 'date-fns'

/**
 *
 *
 * @export
 * @param {(string | Date)} date
 * @returns {string} data formatada
 */
export function formatDateUs(date) {
  return format(date, 'yyyy-MM-dd')
}
