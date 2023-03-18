import { isNumber } from "../identify/is_number";

export function isLimit(limit: number) {
  if (!isNumber(limit)) throw new Error("Limit deve ser um número");
  if (limit < 1 || limit > 10000)
    throw new Error("Limit deve estar entre 1 e 10.000");
  return limit;
}
