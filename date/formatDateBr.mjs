import { format } from 'date-fns'

/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
export function formatDateBr(date) {
  return format(date, 'dd/MM/yyyy')
}
