import { formatNumber } from "./formatNumber";

/**
 * converte um número para #,##0.00
 */
export function formatNumberBr(numero: number): string {
  return formatNumber(numero, 2, 3, ".", ",");
}
