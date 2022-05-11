import formatNumber from "./formatNumber";

/**
 * converte um número para #,##0.00
 */
function formatNumberBr(numero: number): string {
  return formatNumber(numero, 2, 3, ".", ",");
}

export default formatNumberBr;
