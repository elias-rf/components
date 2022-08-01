/**
 * verifica se é do tipo Date
 *
 * @param {any} date
 * @returns {boolean} verdadeiro se o tipo é Date
 */
function isDate(date: any) {
  return Object.prototype.toString.call(date) === "[object Date]";
}

export default isDate;
