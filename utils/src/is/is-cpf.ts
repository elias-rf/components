import { calcDvCpf } from "../string/calcDvCpf";

/**
 * Valida um cpf
 *
 * @param {string} cpf
 * @returns {boolean}
 */
function isCPF(cpf: string) {
  const dv = calcDvCpf(cpf);
  return dv === cpf.substr(-2, 2);
}

export default isCPF;
