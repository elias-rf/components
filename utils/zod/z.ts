import { z } from "zod";
import { errorMapBr } from "./z-br";

z.setErrorMap(errorMapBr);

export function zod<T extends z.ZodTypeAny>(data: any, schema: T) {
  const resp: any = schema.safeParse(data);
  if (resp.success) return;
  throw new Error(resp.error.issues[0].message);
}

export function isValid<T extends z.ZodTypeAny>(data: any, schema: T) {
  const resp = schema.safeParse(data);
  return resp.success;
}

export { z };
