const dateFormat = require("./formatDate");

/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
function formatDateBr(date) {
  return dateFormat(date, "dd/MM/yyyy");
}

module.exports = formatDateBr;
