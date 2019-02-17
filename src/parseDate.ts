import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/**
 * Converte uma string representando uma data para Date
 *
 * @param {string} date data no formato 'dia/mes/ano'
 * @param {string} format formato da data
 * @returns {date} data
 */
function parseDate(date, format?) {
  let fmt;
  if (date === null) {
    return null;
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return date;
  }
  // considera dia/mes/ano ou mes-dia-ano
  if (date.indexOf('/') >= 0) {
    fmt = ['D/M/YYYY', 'D/M/YY', 'D/M'];
  } else {
    fmt = ['M/D/YYYY', 'M/D/YY', 'M-D'];
  }

  if (format) {
    fmt = [format];
  }

  for (let f of fmt) {
    const rsp = dayjs(date, <any>f);
    if (rsp.isValid()) {
      return rsp.toDate();
    }
  }

  return null;
}

export default parseDate;
