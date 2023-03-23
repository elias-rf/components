import { isValid, zd } from "./zod";

export function zLimit(limit: number) {
  if (isValid(limit, zd.number().int().min(1).max(10000))) return;
  throw new Error("limit deve ser inteiro entre 1 e 10.000");
}
