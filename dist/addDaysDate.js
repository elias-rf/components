"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDaysDate(date, days) {
    const MILISEG_DIA = 24 * 3600 * 1000;
    return new Date(date.valueOf() + days * MILISEG_DIA);
}
exports.default = addDaysDate;
//# sourceMappingURL=addDaysDate.js.map