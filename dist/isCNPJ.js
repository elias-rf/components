"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcDvCnpj_1 = require("./calcDvCnpj");
/**
 * Valida um cnpj
 *
 * @param {string} str CNPJ com ou sem formato
 * @returns {boolean} True se for válido
 */
function isCNPJ(cnpj) {
    const dv = calcDvCnpj_1.default(cnpj);
    return dv === cnpj.substr(-2, 2);
}
exports.default = isCNPJ;
