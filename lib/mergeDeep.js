"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = require("./isObject");
/**
 * Executa um merge de dois objetos
 *
 * @param {Object} target Objeto destino
 * @param {Object} source Objeto origem
 * @returns {Object} Novo objeto
 */
function mergeDeep(target, source) {
    let rsp = Object.assign({}, target);
    if (isObject_1.default(target) && isObject_1.default(source)) {
        Object.keys(source).forEach(key => {
            if (isObject_1.default(source[key])) {
                if (!(key in target)) {
                    rsp = Object.assign({}, rsp, { [key]: source[key] });
                }
                else {
                    rsp[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                rsp = Object.assign({}, rsp, { [key]: source[key] });
            }
        });
    }
    return rsp;
}
exports.default = mergeDeep;
