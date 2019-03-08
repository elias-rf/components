"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
/**
 * formata uma data para qualquer formato indicado
 *
 * @param {date} date
 * @param {string} fmt
 * @returns {string} data no formato indicado
 */
function formatDate(date, fmt) {
    return dayjs(date).format(fmt);
}
exports.default = formatDate;
