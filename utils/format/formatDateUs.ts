import { formatDate } from './formatDate.js'

/**
 *
 *
 * @export
 * @param {(string | Date)} date
 * @returns {string} data formatada
 */
function formatDateUs(date: any) {
  return formatDate(date, 'YYYY-MM-DD')
}

export default formatDateUs
