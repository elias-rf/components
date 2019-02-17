"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDaysDate_1 = require("./addDaysDate");
function goWeekEnd(date) {
    return addDaysDate_1.default(date, 6 - date.getUTCDay());
}
exports.default = goWeekEnd;
//# sourceMappingURL=goWeekEnd.js.map