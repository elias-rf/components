"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDaysDate_1 = require("./addDaysDate");
/**
 * Calcula o sábado da semanda indicada pela data
 */
function goWeekEnd(date) {
    return addDaysDate_1.default(date, 6 - date.getUTCDay());
}
exports.default = goWeekEnd;
