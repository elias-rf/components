"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
function formatDate(date, fmt) {
    return dayjs(date).format(fmt);
}
exports.default = formatDate;
//# sourceMappingURL=formatDate.js.map