"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adiciona uma quantidade de dias para uma data
 *
 * @param {any} date1
 * @param {any} date2
 * @returns {number} quantidade de dias entre duas datas
 */
function diffDateDays(date1, date2) {
    const MILISEG_DIA = 24 * 3600 * 1000;
    return Math.abs((date1.valueOf() - date2.valueOf()) / MILISEG_DIA);
}
exports.default = diffDateDays;
