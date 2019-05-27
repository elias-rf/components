"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatDate_1 = require("./formatDate");
/**
 *
 *
 * @export
 * @param {date} date
 * @returns {string} data formatada
 */
function formatDateBr(date) {
    return formatDate_1.default(date, 'DD/MM/YYYY');
}
exports.default = formatDateBr;
