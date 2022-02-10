const dateFormat = require("./formatDate");

/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
function formatDateBr(date) {
  return dateFormat(date, "DD/MM/YYYY");
}

module.exports = formatDateBr;
