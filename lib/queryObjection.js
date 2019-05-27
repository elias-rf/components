"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const parseDate_1 = require("./parseDate");
const formatDateUs_1 = require("./formatDateUs");
const Op = {
    eq: '=',
    ne: 'is not',
    and: 'and',
    or: 'or',
    gt: '>',
    gte: '>=',
    lt: '<',
    lte: '<=',
    like: 'like',
    notLike: 'not Like',
};
function dateFromBr(valor) {
    if (valor === null) {
        return null;
    }
    const rsp = parseDate_1.default(valor);
    if (rsp === null) {
        return valor;
    }
    return formatDateUs_1.default(rsp);
}
/**
 * Converte uma string contendo operadores e parametros e converte para objeto
 *
 * @param {any} filtro
 * @returns
 */
function parseFiltro(filtro) {
    let rsp = dateFromBr(filtro);
    if (rsp === 'null') {
        rsp = null;
    }
    return rsp;
}
/**
 * Cria um objeto para query no sequelize
 */
function renameIgualdade(filtro) {
    const key = Object.keys(filtro)[0];
    if (filtro[key] === 'null') {
        return [Op[key], null];
    }
    return [Op[key], filtro[key]];
}
function loopWhere(filtro, knex) {
    const flt = filtro;
    let campo;
    let igualdade = '=';
    let valor = '';
    if (typeof flt === 'object') {
        Object.keys(flt).forEach(prp => {
            campo = prp;
            if (typeof flt[prp] === 'object') {
                [igualdade, valor] = renameIgualdade(flt[prp]);
            }
            else if (flt[prp].toString().trim() !== '') {
                if (typeof flt[prp] === 'number') {
                    valor = flt[prp].toString();
                }
                valor = parseFiltro(flt[prp].trim());
            }
            knex = knex.where(campo, igualdade, valor);
        });
    }
    return knex;
}
/**
 * Cria uma query no padrão do Sequelize
 *
 * @export
 * @param {Object} qry Objeto contendo parametros de filtragem
 * @returns {Object} Query Sequelize
 */
function queryObjection(qry, model) {
    const q = qry;
    let qb = model.query();
    // SKIP: 0 -> offset: 0
    if ({}.hasOwnProperty.call(q, 'SKIP')) {
        const skip = parseInt(q.SKIP, 10);
        if (!Number.isNaN(skip) && skip > 0) {
            qb = qb.offset(skip);
        }
        delete q.SKIP;
    }
    // LIMIT: 0 -> limit: 0
    if ({}.hasOwnProperty.call(q, 'LIMIT')) {
        const limit = parseInt(q.LIMIT, 10);
        if (!Number.isNaN(limit) && limit > 0) {
            qb = qb.limit(limit);
        }
        delete q.LIMIT;
    }
    // FIELDS: 'f1,f2,f3' -> attributes: [f1, f2, f3]
    if ({}.hasOwnProperty.call(q, 'FIELDS')) {
        const fields = q.FIELDS.split(',');
        if (fields[0].length !== 0) {
            qb = qb.select(fields);
        }
        delete q.FIELDS;
    }
    // SORT: '-field' -> order:[[field, 'DESC']]
    if ({}.hasOwnProperty.call(q, 'SORT')) {
        const sort = q.SORT;
        if (sort.length > 0) {
            if (q.SORT[0] === '-') {
                qb = qb.orderBy(q.SORT.substr(1), 'desc');
            }
            else {
                qb = qb.orderBy(q.SORT);
            }
        }
        delete q.SORT;
    }
    // field: 'value' -> where:{}
    loopWhere(q, qb);
    return qb;
}
exports.default = queryObjection;
