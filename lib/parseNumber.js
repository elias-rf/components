"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceStringAll_1 = require("./replaceStringAll");
/**
 * transforma uma string em número
 */
function parseNumber(numero, separadorGrupo = ',', separadorDecimal = '.') {
    if (typeof numero === 'number') {
        return numero;
    }
    let num = replaceStringAll_1.default(numero, separadorGrupo, '');
    num = replaceStringAll_1.default(num, separadorDecimal, '.');
    if (num.lastIndexOf('.') >= 0) {
        return parseFloat(num);
    }
    return parseInt(num, 10);
}
exports.default = parseNumber;
