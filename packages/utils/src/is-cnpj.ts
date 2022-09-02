import { calcDvCnpj } from "./calc-dv-cnpj";

/**
 * Valida um cnpj
 *
 * @param {string} str CNPJ com ou sem formato
 * @returns {boolean} True se for válido
 */
export function isCnpj(cnpj: string) {
  const dv = calcDvCnpj(cnpj);
  return dv === cnpj.substr(-2, 2);
}
