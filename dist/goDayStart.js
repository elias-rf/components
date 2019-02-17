"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function goDayStart(date) {
    const rsp = date;
    rsp.setUTCHours(0, 0, 0, 0);
    return rsp;
}
exports.default = goDayStart;
//# sourceMappingURL=goDayStart.js.map