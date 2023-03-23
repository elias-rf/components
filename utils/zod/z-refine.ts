import { day } from "../date/day";
import { zd } from "./zod";

export const zsr = {
  date(val: any, ctx: any) {
    if (!day(val, "YYYY-MM-DD", true).isValid()) {
      ctx.addIssue({
        code: zd.ZodIssueCode.invalid_date,
        message: `${val} não é uma data válida`,
        fatal: true,
      });
      return zd.NEVER;
    }
  },
  month(val: any, ctx: any) {
    if (!day(val, "YYYY-MM", true).isValid()) {
      ctx.addIssue({
        code: zd.ZodIssueCode.invalid_date,
        message: `${val} não é um mês válido`,
        fatal: true,
      });
      return zd.NEVER;
    }
  },
};
