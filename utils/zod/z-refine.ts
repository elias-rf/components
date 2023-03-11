import { day } from "../date/day";
import { z } from "./z";

export const zsr = {
  date(val: any, ctx: any) {
    if (!day(val, "YYYY-MM-DD", true).isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: `${val} não é uma data válida`,
        fatal: true,
      });
      return z.NEVER;
    }
  },
  month(val: any, ctx: any) {
    if (!day(val, "YYYY-MM", true).isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: `${val} não é um mês válido`,
        fatal: true,
      });
      return z.NEVER;
    }
  },
};
