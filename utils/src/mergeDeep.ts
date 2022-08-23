import { isObject } from "./type-guard";

/**
 * Executa um merge de dois objetos
 *
 * @param {Object} target Objeto destino
 * @param {Object} source Objeto origem
 * @returns {Object} Novo objeto
 */
export function mergeDeep(target: any, source: any): any {
  let rsp = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          rsp = Object.assign({}, rsp, { [key]: source[key] });
        } else {
          rsp[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        rsp = Object.assign({}, rsp, { [key]: source[key] });
      }
    });
  }
  return rsp;
}
