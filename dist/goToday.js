"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Retorna o dia de hoje às 0:00 horas
 */
function goToday() {
    const rsp = new Date();
    rsp.setHours(0, 0, 0, 0);
    return rsp;
}
exports.default = goToday;
