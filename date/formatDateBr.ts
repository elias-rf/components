import dateFormat from "./formatDate";

/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
function formatDateBr(date: Date): string {
  return dateFormat(date, "DD/MM/YYYY");
}

export default formatDateBr;
