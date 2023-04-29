import { TWhere } from "@mono/types";
import { isEmpty } from "@mono/utils/identify/is_empty";

export const whereUtil = {
  setUnique(where: TWhere[], field: string, value: any): TWhere[] {
    let flag = false;
    if (!Array.isArray(where) || isEmpty(field)) {
      return [];
    }
    let rsp = where.map((wh) => {
      if (!Array.isArray(wh)) return;
      if (wh[0] === field) {
        flag = true;
        if (isEmpty(value)) {
          return null;
        }
        return [field, "=", value];
      }
      return wh;
    });

    if (!flag && !isEmpty(value)) {
      rsp.push([field, "=", value]);
    }
    rsp = rsp.filter((wh) => Array.isArray(wh));
    return rsp as TWhere[];
  },
  /** Retorna o valor para o campo da lista de where */
  getValue(where: TWhere[], field: string) {
    if (isEmpty(field) || isEmpty(where)) return null;
    for (const wh of where as TWhere[]) {
      if (wh && wh[0] === field) {
        const rsp = wh[2];
        return rsp;
      }
    }
    return null;
  },
};
