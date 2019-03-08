"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseNumber_1 = require("./parseNumber");
/**
 * transforma uma string #.##0,00 para número
 */
function parseNumberBr(numero) {
    return parseNumber_1.default(numero, '.', ',');
}
exports.default = parseNumberBr;
