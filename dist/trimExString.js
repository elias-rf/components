"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trimExString(txt) {
    let rsp = '';
    [rsp] = txt.split('\0');
    return rsp.trim();
}
exports.default = trimExString;
//# sourceMappingURL=trimExString.js.map