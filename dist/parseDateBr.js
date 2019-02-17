"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseDate_1 = require("./parseDate");
function parseDateBr(date) {
    if (date.length >= 8) {
        return parseDate_1.default(date, 'd/M/yy');
    }
    return parseDate_1.default(date, 'd/M');
}
exports.default = parseDateBr;
//# sourceMappingURL=parseDateBr.js.map