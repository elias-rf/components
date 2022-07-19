import { parseNumber } from "./parseNumber";

/**
 * transforma uma string #.##0,00 para número
 */
export function parseNumberBr(numero: any) {
  return parseNumber(numero, ".", ",");
}
