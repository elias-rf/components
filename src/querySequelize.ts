/*
{SKIP:10}
{LIMIT:10}
{FIELDS:'campo1, campo2']}
{SORT:-campo}
and, or, gt, gte, lt, lte, ne, eq,
not, between, notBetween, in, notIn,
like, notLike, regexp,
overlap, contains, contained
*/

import parseDate from './parseDate';
import formatUs from './formatDateUs';

function dateFromBr(valor: any) {
  if (valor === null) {
    return null;
  }
  const rsp = parseDate(valor);
  if (rsp === null) {
    return valor;
  }
  return formatUs(rsp);
}

/**
 * Converte uma string contendo operadores e parametros e converte para objeto
 *
 * @param {any} filtro
 * @returns
 */
function parseFiltro(filtro: any) {
  let rsp = dateFromBr(filtro);
  if (rsp === 'null') {
    rsp = null;
  }
  return rsp;
}

class QuerySequelize {
  Op: string;

  constructor(Op: any) {
    this.Op = Op;
  }

  /**
   * Cria um objeto para query no sequelize
   */

  renameIgualdade(filtro: { [x: string]: any }) {
    const key = Object.keys(filtro)[0];
    if (filtro[key] === 'null') {
      return { [this.Op[key]]: null };
    }
    return { [this.Op[key]]: filtro[key] };
  }

  loopWhere(filtro: any) {
    const flt = filtro;
    let rsp: {};
    const whr = {};
    if (typeof flt === 'object') {
      Object.keys(flt).forEach(prp => {
        if (typeof flt[prp] === 'object') {
          whr[prp] = this.renameIgualdade(flt[prp]);
        } else if (flt[prp].toString().trim() !== '') {
          if (typeof flt[prp] === 'number') {
            flt[prp] = flt[prp].toString();
          }
          whr[prp] = parseFiltro(flt[prp].trim());
        }
      });
    }
    if (Object.keys(whr).length > 0) {
      rsp = whr;
    }
    return rsp;
  }

  /**
   * Cria uma query no padrão do Sequelize
   *
   * @export
   * @param {Object} qry Objeto contendo parametros de filtragem
   * @returns {Object} Query Sequelize
   */
  parse(qry: any) {
    const rsp: {
      limit?: number;
      offset?: number;
      order?: any[];
      attributes?: any[];
      where?: any;
    } = {};
    const q = qry;

    // SKIP: 0 -> offset: 0
    if ({}.hasOwnProperty.call(q, 'SKIP')) {
      const skip = parseInt(q.SKIP, 10);
      if (!Number.isNaN(skip) && skip > 0) {
        rsp.offset = skip;
      }
      delete q.SKIP;
    }

    // LIMIT: 0 -> limit: 0
    if ({}.hasOwnProperty.call(q, 'LIMIT')) {
      const limit = parseInt(q.LIMIT, 10);
      if (!Number.isNaN(limit) && limit > 0) {
        rsp.limit = limit;
      }
      delete q.LIMIT;
    }

    // FIELDS: 'f1,f2,f3' -> attributes: [f1, f2, f3]
    if ({}.hasOwnProperty.call(q, 'FIELDS')) {
      const fields = q.FIELDS.split(',');

      if (fields[0].length !== 0) {
        rsp.attributes = fields;
      }
      delete q.FIELDS;
    }

    // SORT: '-field' -> order:[[field, 'DESC']]
    if ({}.hasOwnProperty.call(q, 'SORT')) {
      const sort = q.SORT;
      if (sort.length > 0) {
        rsp.order = [[]];
        if (q.SORT[0] === '-') {
          rsp.order[0][0] = q.SORT.substr(1);
          rsp.order[0][1] = 'DESC';
        } else {
          rsp.order[0][0] = q.SORT;
        }
      }
      delete q.SORT;
    }

    // field: 'value' -> where:{}
    const w = this.loopWhere(q);
    if (w !== undefined) {
      rsp.where = w;
    }

    return rsp;
  }
}

export default QuerySequelize;
