import { calcDvCpf } from "./calc-dv-cpf";

/**
 * Valida um cpf
 *
 * @param {string} cpf
 * @returns {boolean}
 */
export function isCpf(cpf: string) {
  const dv = calcDvCpf(cpf);
  return dv === cpf.substr(-2, 2);
}
