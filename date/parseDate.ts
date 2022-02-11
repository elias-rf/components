import day from "./day";

/**
 * Converte uma string representando uma data para Date
 *
 * @param {string} date data no formato 'dia/mes/ano'
 * @param {string} format formato da data
 * @returns {date} data
 */
function parseDate(date: any, format?: string) {
  let fmt;
  if (date === null) {
    return null;
  }
  if (Object.prototype.toString.call(date) === "[object Date]") {
    return date;
  }
  // considera dia/mes/ano ou mes-dia-ano
  if (date.indexOf("/") >= 0) {
    fmt = ["D/M/YY", "DD/MM/YYYY'T'HH:mm:ss.SSS'Z'", "D/M/YYYY", "D/M"];
  } else {
    fmt = ["M-D-YY", "M-D-YYYY", "M-D"];
  }

  if (format) {
    fmt = [format];
  }
  let rsp;

  rsp = day(date, fmt, true);
  if (rsp.isValid()) {
    return rsp.toDate();
  }

  return null;
}

export default parseDate;
