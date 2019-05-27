"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcDvCpf_1 = require("./calcDvCpf");
/**
 * Valida um cpf
 *
 * @param {string} cpf
 * @returns {boolean}
 */
function isCPF(cpf) {
    const dv = calcDvCpf_1.default(cpf);
    return dv === cpf.substr(-2, 2);
}
exports.default = isCPF;
