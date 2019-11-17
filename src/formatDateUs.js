const formatDate = require('./formatDate');

/**
 *
 *
 * @export
 * @param {(string | Date)} date
 * @returns {string} data formatada
 */
function formatDateUs(date) {
  return formatDate(date, 'YYYY-MM-DD');
}

module.exports = formatDateUs;
