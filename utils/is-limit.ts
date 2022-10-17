import { isNumber } from "./is-number";

export function isLimit(limit: number): string | null {
  if (!isNumber(limit)) return "Limit deve ser um número";
  if (limit < 1 || limit > 10000) return "Limit deve estar entre 1 e 10.000";
  return null;
}
