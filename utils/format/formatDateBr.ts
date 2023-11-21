import { formatDate } from './formatDate.js'

/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
function formatDateBr(date: Date): string {
  return formatDate(date, 'DD/MM/YYYY')
}

export default formatDateBr
