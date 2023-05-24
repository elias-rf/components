import { z } from "zod";
import { errorMapBr } from "./zod-br";

z.setErrorMap(errorMapBr);

export function zod<T extends z.ZodTypeAny>(data: any, schema: T) {
  const resp: any = schema.safeParse(data);
  if (resp.success) return;
  throw new Error(resp.error.issues[0].message);
}

export const zValidate = <T extends z.ZodTypeAny>(schema: T) => {
  return (data: any) => {
    const resp = schema.safeParse(data);
    if (!resp.success) return resp.error.issues[0].message;
  };
};

export { z as zd };
