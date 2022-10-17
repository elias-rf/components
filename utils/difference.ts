/**
 * Retorna os elementos de array1 que não aparecem em array2
 */

export function difference(array1: any[], array2: any[]) {
  const arrays = [array1, array2];
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
}
