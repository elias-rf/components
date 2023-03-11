import { isValid, z } from "./z";

export function zLimit(limit: number) {
  if (isValid(limit, z.number().int().min(1).max(10000))) return;
  throw new Error("limit deve ser inteiro entre 1 e 10.000");
}
