"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDaysDate_1 = require("./addDaysDate");
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date) {
    return addDaysDate_1.default(date, -date.getUTCDay());
}
exports.default = goWeekStart;
