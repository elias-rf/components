"use strict";
/**
 * Verifica se o item é um Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(item) {
    if (Object.prototype.toString.call(item) === '[object Number]') {
        if (Number.isNaN(item)) {
            return false;
        }
        return true;
    }
    return false;
}
exports.default = isNumber;
