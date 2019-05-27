"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatDate_1 = require("./formatDate");
/**
 *
 *
 * @export
 * @param {(string | Date)} date
 * @returns {string} data formatada
 */
function formatDateUs(date) {
    return formatDate_1.default(date, 'YYYY-MM-DD');
}
exports.default = formatDateUs;
